import dayjs from "dayjs";
import slugify from "slugify";
import { APP_DOMAIN } from "src/1cademyConfig";
import ROUTES from "src/routes";

import { SortTypeWindowOption, TimeWindowOption } from "../src/knowledgeTypes";../src/knowledgeTypes.old

export const isValidHttpUrl = (possibleUrl?: string) => {
  let url;
  if (!possibleUrl) {
    return false;
  }

  try {
    url = new URL(possibleUrl);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
};

export const escapeBreaksQuotes = (text?: string) => {
  if (!text) {
    return "";
  }
  return text.replace(/(?:\r\n|\r|\n)/g, "<br>").replace(/['"]/g, "");
};

export const encodeTitle = (title?: string) => {
  return encodeURI(escapeBreaksQuotes(title)).replace(/[&\/\?\\]/g, "");
};

export const getQueryParameter = (val: string | string[] | undefined) => {
  if (Array.isArray(val)) {
    return val[0];
  } else {
    return val;
  }
};

export const getQueryParameterAsNumber = (val: string | string[] | undefined): number | undefined => {
  const res = getQueryParameter(val);
  if (res === undefined || Number.isNaN(parseInt(res)) || !Number.isFinite(parseInt(res))) {
    return undefined;
  }

  return parseInt(res);
};

export const getQueryParameterAsBoolean = (val: string | string[] | undefined): boolean => {
  const res = getQueryParameter(val);
  if (res === undefined || val === "false") {
    return false;
  }

  return true;
};

export const SortedByTimeOptions: TimeWindowOption[] = [
  TimeWindowOption.AnyTime,
  TimeWindowOption.ThisWeek,
  TimeWindowOption.ThisMonth,
  TimeWindowOption.ThisYear
];

export const getNodePageURLTitle = (title: string | undefined, id: string) => {
  const resTitleSlug = slugify(title || "", { lower: true, remove: /[#‐*+~.,?/$()\\'"!:@\r\n]/g });
  if (resTitleSlug.length === 0) {
    return id;
  }
  if (resTitleSlug.length > 100) {
    return resTitleSlug.substring(0, 100);
  }
  return resTitleSlug;
};

export const getNodePageUrl = (title: string, id: string) => {
  return `${ROUTES.node}/${getNodePageURLTitle(title, id)}/${id}`;
};

export const getNodePageWithDomain = (title: string, id: string) => {
  return `${APP_DOMAIN}${getNodePageUrl(title, id).slice(1)}`;
};

export const homePageSortByDefaults = {
  upvotes: true,
  mostRecent: false,
  timeWindow: SortedByTimeOptions[0],
  perPage: 10
};

export const getDefaultSortedByType = (filtersSelected: { mostRecent: boolean; upvotes: boolean }) => {
  if (filtersSelected.mostRecent) return SortTypeWindowOption.MOST_RECENT;
  if (filtersSelected.upvotes) return SortTypeWindowOption.UPVOTES_DOWNVOTES;
  return SortTypeWindowOption.NONE;
};

export const buildSortBy = (upvotes: boolean, mostRecent: boolean) => {
  if (upvotes) {
    return "mostHelpful:desc";
  }
  if (mostRecent) {
    return "changedAtMillis:desc";
  }
  return "";
};

export const buildFilterBy = (
  timeWindow: TimeWindowOption,
  tags: string,
  institutions: string,
  contributors: string,
  nodeTypes: string,
  reference: string,
  label: string
) => {
  const filters: string[] = [];
  let updatedAt: number;
  if (timeWindow === TimeWindowOption.ThisWeek) {
    updatedAt = dayjs().subtract(1, "week").valueOf();
  } else if (timeWindow === TimeWindowOption.ThisMonth) {
    updatedAt = dayjs().subtract(1, "month").valueOf();
  } else if (timeWindow === TimeWindowOption.ThisYear) {
    updatedAt = dayjs().subtract(1, "year").valueOf();
  } else {
    updatedAt = dayjs().subtract(10, "year").valueOf();
  }

  filters.push(`changedAtMillis:>${updatedAt}`);

  if (tags.length > 0) filters.push(`tags: [${tags}]`);
  if (institutions.length > 0) filters.push(`institNames: [${institutions}]`);
  if (contributors.length > 0) filters.push(`contributorsNames: [${contributors}]`);
  if (nodeTypes.length > 0) filters.push(`nodeType: [${nodeTypes}]`);
  if (reference) filters.push(`titlesReferences: ${reference}`);
  if (label && label !== "All Sections" && label !== "All Pages") filters.push(`labelsReferences: ${label}`);

  return filters.join("&& ");
};

export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const loadHomeSearchBackground = () => `
<svg width="1200" height="479" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="1200" height="479" fill="#28282A" />
  <rect id="r" width="1200" height="479" fill="url(#g)" />
</svg>`;

export const toBase64 = (str: string) =>
  typeof window === "undefined" ? Buffer.from(str).toString("base64") : window.btoa(str);
