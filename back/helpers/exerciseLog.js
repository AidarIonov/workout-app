export const reBuildTimes = (log, prevExLog = null) => {
  return log.times.map((item, i) => ({
    ...item,
    prevWeight: prevExLog ? prevExLog.times[i].weight : 0,
    prevRepeat: prevExLog ? prevExLog.times[i].repeat : 0,
  }))
};