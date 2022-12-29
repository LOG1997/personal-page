import request from "@/api/request";
export function getSkill(params: any) {
  return request({
    url: "/home/getSkill",
    method: "get",
    params,
  });
}
