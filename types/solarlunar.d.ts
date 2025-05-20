declare module 'solarlunar' {
  interface LunarDate {
    lYear: number;
    lMonth: number;
    lDay: number;
    animal: string;
    monthCn: string;
    dayCn: string;
    cYear: number;
    cMonth: number;
    cDay: number;
    gzYear: string;
    gzMonth: string;
    gzDay: string;
    isToday: boolean;
    isLeap: boolean;
    nWeek: number;
    ncWeek: string;
    isTerm: boolean;
    term: string;
  }

  interface SolarLunar {
    solar2lunar: (year: number, month: number, day: number) => LunarDate;
    lunar2solar: (year: number, month: number, day: number, isLeapMonth?: boolean) => LunarDate;
  }

  const solarLunar: SolarLunar;
  export default solarLunar;
} 