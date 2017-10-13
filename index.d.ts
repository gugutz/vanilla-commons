declare module 'vanilla-commons' {
  export = commons;
}

declare namespace commons {
  interface DateDiff {
    milliseconds: number;
    seconds: number;
    minutes: number;
    hours: number;
    days: number;
    weeks: number;
    months: number;
    years: number;
  }

  function flattenArray(arr: any[][]): any[];

  function addDays(days: number): (date: Date) => Date;
  function addDays(days: number, date: Date): Date;

  function addHours(hours: number): (date: Date) => Date;
  function addHours(hours: number, date: Date): Date;

  function addMilliseconds(milliseconds: number): (date: Date) => Date;
  function addMilliseconds(milliseconds: number, date: Date): Date;

  function addMinutes(minutes: number): (date: Date) => Date;
  function addMinutes(minutes: number, date: Date): Date;

  function addMonths(months: number): (date: Date) => Date;
  function addMonths(months: number, date: Date): Date;

  function addSeconds(seconds: number): (date: Date) => Date;
  function addSeconds(seconds: number, date: Date): Date;

  function addWeeks(weeks: number): (date: Date) => Date;
  function addWeeks(weeks: number, date: Date): Date;

  function addYears(years: number): (date: Date) => Date;
  function addYears(years: number, date: Date): Date;

  function diffDate(firstDate: Date): (secondDate: Date) => DateDiff;
  function diffDate(firstDate: Date, secondDate: Date): DateDiff;

  function formatDate(format: string): (date: Date) => String;
  function formatDate(format: string, date: Date): string;

  function isValidDate(format: string): (dateStr: string) => boolean;
  function isValidDate(format: string, dateStr: string): boolean;

  function parseDate(format: string): (dateStr: string) => Date;
  function parseDate(format: string, dateStr: string): Date;

  function addClass(newClass: string | string[], element: HTMLElement): HTMLElement;
  function addClass(newClass: string | string[]): (element: HTMLElement) => HTMLElement;


  function clearEvents(element: HTMLElement): HTMLElement;

  function createElement(selector?: string, props?: any, children?: any[]): HTMLElement;

  function getParents(element: HTMLElement): HTMLElement[];

  function hasClass(classToCheck: string | string[]): (element: HTMLElement) => boolean;
  function hasClass(classToCheck: string | string[], element: HTMLElement): boolean;

  function hideElement(elementToHide: HTMLElement | HTMLElement[]): HTMLElement | HTMLElement[];


  function insertElementAfter(referenceElement: HTMLElement): (newElement: HTMLElement) => HTMLElement;
  function insertElementAfter(referenceElement: HTMLElement, newElement: HTMLElement): HTMLElement;

  function insertElementBefore(referenceElement: HTMLElement): (newElement: HTMLElement) => HTMLElement;
  function insertElementBefore(referenceElement: HTMLElement, newElement: HTMLElement): HTMLElement;

  function killElement(elementToKill: HTMLElement | HTMLElement[]): void;

  function removeClass(classToRemove: string | string[]): (element: HTMLElement) => HTMLElement;
  function removeClass(classToRemove: string | string[], element: HTMLElement): HTMLElement;

  function replaceElement(originalElement: HTMLElement): (newElement: HTMLElement) => HTMLElement;
  function replaceElement(originalElement: HTMLElement, newElement: HTMLElement): HTMLElement;

  function showElement(elementToShow: HTMLElement | HTMLElement[]): HTMLElement | HTMLElement[];

  function toggleClass(classToToggle: string | string[]):  (element: HTMLElement) => HTMLElement;
  function toggleClass(classToToggle: string | string[], element: HTMLElement): HTMLElement;

  function compose(...fns: Function[]): Function;

  function curry(fn: Function): Function;

  function pipe(...fns: Function[]): Function;

  function throttle(limit: number, fn: Function): Function;

  function round(num: number): number;

  function mapKeys(fn: (key: any) => any, obj: any): any;

  function mapValues(fn: (value: any) => any, obj: any): any;

  function capitalize(str: string): string;

  function cleanUpString(str: string): string;
}
