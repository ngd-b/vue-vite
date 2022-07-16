
/**
 * 格式化时间
 */
import dayjs from 'dayjs'

/**
 * 格式化 YYYY-MM-DD
 * @param {} val 
 * @returns 
 */
export const formatDate = (val)=>{

    return dayjs(val).format('YYYY-MM-DD')
}