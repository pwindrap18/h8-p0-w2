function konversiMenit(menit){
  var minute=menit;
  var detik='';
  
  detik=menit%60;
  menit=menit-detik;
  menit=menit/60;
  
  if (detik<10){
    detik='0'+detik
  }
  return menit+':'+detik;
}


console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

