import request from "@/api/request";
export function getSkill(params: object) {
  return request({
    url: "/home/getSkill",
    method: "get",
    params,
  });
}
