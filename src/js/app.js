export default function chekHealth(unit) {
  if (unit.health < 15) {
    return 'critical';
  } else if (unit.health <= 49){
    return 'wounded';
  } else if (unit.health >= 50){
    return 'healthy';
  }
}