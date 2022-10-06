import type { ScoreParams } from "@/models/score.data";

/**
 * Converts date to the API required format
 * @param date
 * @returns
 */
export function convertDate(date: string | undefined): string | undefined {
  if (!date) {
    return;
  }
  const d = new Date(date);
  const month =
    d.getMonth() + 1 < 10 ? "0" + (d.getMonth() + 1) : d.getMonth() + 1;
  const day = d.getDate() < 10 ? "0" + d.getDate() : d.getDate();
  const formanttedDate = `${d.getFullYear()}/${month}/${day}`;

  return formanttedDate;
}

/**
 * Prepares dates range for the stats api
 * @param data
 * @returns
 */
export function setParams(data: ScoreParams): string {
  const from = convertDate(data.from);
  const to = convertDate(data.to);

  if (from && to) {
    return `period:[${from} TO ${to}]`;
  } else if (from) {
    return `period>="${from}"`;
  } else if (to) {
    return `period<="${to}"`;
  }
  return "";
}

/**
 * Prepare data for graph
 * Group datasets if length is too large
 *
 * Group sizes:
 * 7 if items number > 10
 * 30 if items number > 40
 *
 * @param data
 * @returns
 */
export function mapStats(data: any[]) {
  let groupBy = 0;

  if (data?.length > 40) {
    groupBy = 30;
  } else if (data?.length > 10) {
    groupBy = 7;
  }

  const records = data?.map(
    (r) => r?.fields?.cushing_ok_wti_spot_price_fob_daily
  );

  const labels = data?.map((r) => r?.fields?.period);

  const formattedStats = {
    datasets: groupDatasets(records, groupBy),
    labels: groupLabels(labels, groupBy),
  };

  return formattedStats;
}

/**
 * Create labels
 * each group's label consists of first and last labels
 * @param items
 * @param groupBy
 * @returns
 */
export function groupLabels(items: any[], groupBy: number) {
  if (!groupBy) {
    return items;
  }

  const labels = [];

  for (let i = 0; i < items.length; i += groupBy) {
    const group = items.slice(i, i + groupBy);

    labels.push(`${group[0]} - ${group[group.length - 1]}`);
  }

  return labels;
}

/**
 * Sum data by groups
 * @param items
 * @param groupBy
 * @returns
 */
export function groupDatasets(items: any[], groupBy: number) {
  if (!groupBy) {
    return items;
  }

  const data = [];
  for (let i = 0; i < items.length; i += groupBy) {
    const group = items.slice(i, i + groupBy);
    const sum = group.reduce((prevSum, a) => prevSum + a, 0);
    const avg = sum / group.length;

    data.push(avg);
  }

  return data;
}
