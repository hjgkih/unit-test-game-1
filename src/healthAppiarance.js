export default function healthStatus(personInfo) {
  let result = '';

  if (personInfo.health < 15) {
    result = 'critical';
  } if (personInfo.health > 15 && personInfo.health < 50) {
    result = 'wounded';
  } if (personInfo.health > 50) {
    result = 'healthy';
  }

  return result;
}
