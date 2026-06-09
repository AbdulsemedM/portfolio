export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export const stats: Stat[] = [
  { id: "years", value: 4, suffix: "+", label: "Years" },
  { id: "apps", value: 10, suffix: "+", label: "Production Apps" },
  { id: "downloads", value: 50, suffix: "K+", label: "App Downloads" },
  { id: "companies", value: 5, suffix: "+", label: "Companies" },
];
