import {get, post } from '@/api/http'

//国际学校库 学校列表
export const getSchool = p => get('/new/school/list.do', p)