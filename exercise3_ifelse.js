var nama = 'Jon';
var peran = 'Tabib';

if (nama) {
  console.log ('halo ' + nama + ', pilih peranmu untuk memulai game!');
} else {
  console.log ('nama harus diisi!');
}

if (nama && peran === 'Ksatria') {
  console.log ('Selamat datang di dunia Proxytia, '+ nama);
  console.log ('Halo '+ peran + ' ' + nama + ', kamu dapat menyerang dengan senjatamu!');
} else if (nama && peran === 'Tabib') {
  console.log ('Selamat datang di dunia Proxytia, '+ nama);
  console.log ('Halo '+ peran + ' ' + nama + ', kamu akan membantu temanmu yang terluka');
} else if (nama && peran === 'Penyihir') {
  console.log ('Selamat datang di dunia Proxytia, '+ nama);
  console.log ('Halo '+ peran + ' ' + nama + ', ciptakan keajaiban yang membantu kemenanganmu!');
} 
