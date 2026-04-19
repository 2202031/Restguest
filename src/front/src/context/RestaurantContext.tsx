"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { TableCardProps } from "@/components/tables/TableCard";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

interface RestaurantContextType {
  tables: TableCardProps[];
  activeTableId: string | null;
  tableOrders: Record<string, CartItem[]>;
  userRole: "admin" | "waiter";
  setUserRole: (role: "admin" | "waiter") => void;
  assignTable: (id: string, customerName: string) => void;
  freeTable: (id: string) => void;
  setActiveTableId: (id: string | null) => void;
  updateOrder: (tableId: string, items: CartItem[]) => void;
  getOrder: (tableId: string) => CartItem[];
  checkoutAndFreeTable: (tableId: string) => void;
}

const initialTables: TableCardProps[] = Array.from({ length: 9 }, (_, i) => ({
  id: `${i + 1}`,
  name: `Mesa 0${i + 1}`,
  status: "libre",
}));

const RestaurantContext = createContext<RestaurantContextType | undefined>(undefined);

export const RestaurantProvider = ({ children }: { children: React.ReactNode }) => {
  const [isClient, setIsClient] = useState(false);
  
  // States
  const [tables, setTables] = useState<TableCardProps[]>(initialTables);
  const [activeTableId, setActiveTableId] = useState<string | null>(null);
  const [tableOrders, setTableOrders] = useState<Record<string, CartItem[]>>({});
  const [userRole, setUserRole] = useState<"admin" | "waiter">("admin");

  // Load from LocalStorage on mount
  useEffect(() => {
    setIsClient(true);
    try {
      const savedTables = localStorage.getItem("rg_tables");
      const savedActiveTableId = localStorage.getItem("rg_activeTableId");
      const savedTableOrders = localStorage.getItem("rg_tableOrders");
      const savedRole = localStorage.getItem("rg_userRole");

      if (savedTables) setTables(JSON.parse(savedTables));
      if (savedActiveTableId) setActiveTableId(JSON.parse(savedActiveTableId));
      if (savedTableOrders) setTableOrders(JSON.parse(savedTableOrders));
      if (savedRole) setUserRole(savedRole as "admin" | "waiter");
    } catch (e) {
      console.error("Error loading state from localStorage", e);
    }
  }, []);

  // Save to LocalStorage on change
  useEffect(() => {
    if (!isClient) return;
    localStorage.setItem("rg_tables", JSON.stringify(tables));
    localStorage.setItem("rg_activeTableId", JSON.stringify(activeTableId));
    localStorage.setItem("rg_tableOrders", JSON.stringify(tableOrders));
    localStorage.setItem("rg_userRole", userRole);
  }, [tables, activeTableId, tableOrders, userRole, isClient]);

  const assignTable = (id: string, customerName: string) => {
    setTables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: "ocupado", peopleCount: 1, timeSince: `Cliente: ${customerName}`, amount: 0 }
          : t
      )
    );
    setActiveTableId(id);
    if (!tableOrders[id]) {
      setTableOrders((prev) => ({ ...prev, [id]: [] }));
    }
  };

  const freeTable = (id: string) => {
    setTables((prev) =>
      prev.map((t) =>
        t.id === id
          ? { id: t.id, name: t.name, status: "libre" }
          : t
      )
    );
    if (activeTableId === id) setActiveTableId(null);
    setTableOrders((prev) => {
      const newOrders = { ...prev };
      delete newOrders[id];
      return newOrders;
    });
  };

  const updateOrder = (tableId: string, items: CartItem[]) => {
    setTableOrders((prev) => ({ ...prev, [tableId]: items }));
    
    // Update amount visual on table card
    const amount = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    setTables((prev) =>
      prev.map((t) =>
        t.id === tableId ? { ...t, amount } : t
      )
    );
  };

  const getOrder = (tableId: string) => {
    return tableOrders[tableId] || [];
  };

  const checkoutAndFreeTable = (tableId: string) => {
    freeTable(tableId);
  };

  if (!isClient) {
    return null; // Prevents hydration mismatch
  }

  return (
    <RestaurantContext.Provider
      value={{
        tables,
        activeTableId,
        tableOrders,
        userRole,
        setUserRole,
        assignTable,
        freeTable,
        setActiveTableId,
        updateOrder,
        getOrder,
        checkoutAndFreeTable,
      }}
    >
      {children}
    </RestaurantContext.Provider>
  );
};

export const useRestaurant = () => {
  const context = useContext(RestaurantContext);
  if (!context) {
    throw new Error("useRestaurant must be used within a RestaurantProvider");
  }
  return context;
};
