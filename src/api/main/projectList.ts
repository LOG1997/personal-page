import request from "@/api/request";
export function getProjectList(params: object) {
  return request({
    url: "/project/list",
    method: "get",
    params,
  });
}
