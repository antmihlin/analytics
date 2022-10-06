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
  const month = d.getMonth()+1 < 10? '0'+(d.getMonth()+1): d.getMonth()+1;
  const day = d.getDate() < 10? '0'+d.getDate(): d.getDate();
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

export function mapStats(data: any[]) {
  const records = data?.map( r => r?.fields?.cushing_ok_wti_spot_price_fob_daily );

  const labels = data?.map( r =>r?.fields?.period );

  return { datasets: records, labels };
}
