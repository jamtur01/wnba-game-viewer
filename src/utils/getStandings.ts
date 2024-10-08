import axios from "axios";
import { StandingsResponse } from "../types/standings.types";

type GetStandingsArgs = {
  year: string;
  group: string;
};

const getStandings = async ({ year, group }: GetStandingsArgs): Promise<StandingsResponse> => {
  const groupId = group === "league" ? 1 : group === "conference" ? 1 : 2;
  const baseUrl = `https://site.web.api.espn.com/apis/v2/sports/basketball/wnba/standings`;
  const params = {
    region: "us",
    lang: "en",
    contentorigin: "espn",
    season: year,
    type: 0,
    level: groupId,
  };
  console.log(baseUrl, params);
  const res = await axios.get(baseUrl, {
    params,
  });
  console.log(res.data);
  return res.data;
};

export default getStandings;
