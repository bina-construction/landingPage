export interface Data {
  step?: string;
  client?: "personal" | "professional";
  clientInfo?: {
    corporation?: string;
    name?: string;
    mail?: string;
    phone?: string;
    postal?: number;
  };
  service?: services;
  mesure?: {
    surfaceTotal?: number;
    room?: {
      bedroom?: number;
      kitchen?: number;
      livingRoom?: number;
      bathroom?: number;
      other?: number;
    };
  };
  file?: File[];
}

export interface clientInfo {
  name?: string;
  mail?: string;
  phone?: string;
  postal?: number;
  corporation?: string;
}

export interface mesure {
  surfaceTotal?: number;
  room?: {
    bedroom?: number;
    kitchen?: number;
    livingRoom?: number;
    bathroom?: number;
    other?: number;
  };
}

export type clientInfoKey =
  | "name"
  | "corporation"
  | "mail"
  | "postal"
  | "phone";

export type services = "Hôtellerie / Restauration" | "Retail" | "Autre Projet";
