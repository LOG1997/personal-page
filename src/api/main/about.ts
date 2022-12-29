import request from "@/api/request";
export function getResume(params: object) {
  return request({
    url: "/about/getResume",
    method: "get",
    params,
  });
}
