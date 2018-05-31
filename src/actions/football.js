/**
 * 这里只是取数据而已
 */
export function getFootballData() {
  return dispatch => new Promise((resolve) => {
    let data = [{eventName:'eventName1', homeScore:'1', homeName:'homeName1', awayName:'awayName1', awayScore:'2'},
      {eventName:'eventName1', homeScore:'0', homeName:'homeName1', awayName:'awayName1', awayScore:'3'},
      {eventName:'eventName2', homeScore:'3', homeName:'homeName2', awayName:'awayName2', awayScore:'0'}
    ];
    console.log("data in action:", data);
    return dispatch({
      type: 'LIST',
      data: data,
    });
  });
}
