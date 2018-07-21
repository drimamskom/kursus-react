1.  Newton Second Law
    Algoritma
    a. Tentukan massa_benda (M) = 600 kg
    b. Tentukan percepatan (a) = 2 m/s2
    c. Hitung Resultan_gaya = m x a 
    d. Hasil disimpan di Resultan_gaya
    
    PseudoCode:
    STORE 'massa_benda' with value 600;
    STORE 'percepatan' with value 2;
    STORE 'Resultan_gaya' without any value
    CALCULATE Resultan_gaya = massa_benda x percepatan
    SET 'resultan_gaya' value with calculation result
    DISPLAY 'resultan_gaya'
    
2.  Tahun Kabisat
    Algoritma
    a. cek angka tahun
    b. jika tahun tersebut habis di bagi 4 dan tidak habis di bagi 100 maka tahun itu adalah tahun kabisat
    c. jika tahun tersebut habis di bagi 4 dan habis di bagi 100 dan habis di bagi 400 maka tahun itu adalah tahun kabisat
    d. selain dari itu adalah bukan tahun kabisat
    
    
    PseudoCode:
    STORE `tahun` with any number

    IF `tahun` MOD 4 EQUALS 0 AND `tahun` MOD 100 NOT EQUALS 0 
       DO DISPLAY `tahun` "Adalah tahun Kabisat"
    ELSE IF `tahun` MOD 4 NOT EQUALS 0 AND `tahun` MOD 100 EQUALS 0 AND `tahun` MOD 400 EQUALS 0
       DO DISPLAY `tahun` "Adalah tahun Kabisat"
    ELSE
       DO DISPLAY `tahun` "Bukan tahun Kabisat"
    END IF 

3. Laundry Day 
   Algoritma
   a. masukkan pakaian yang ingin di cuci ke mesin cuci satu persatu
   b. nyalakan mesin cuci apabila pakaian sudah berjumlah 20
   
   PseudoCode:
   STORE 'baju' with any number
   SET 'baju' with 20
   STORE 'counter' with 0

   WHILE 'counter' LESS THAN 'baju'
     DO "Masukkan baju yang ke-" 'counter'
     IF 'counter' EQUALS 20
        DO DISPLAY "Nyalakan mesin cuci!"
     END IF
     SET 'counter' = 'counter' + 1
   END WHILE
   

4. Periksa Kuku
   Algoritma
   a. tentukan jumlah siswa/i dengan angka 40
   b. cek kuku siswa/i satu persatu:
      jika kuku siswa/i panjang maka ke tahap c,
      jika kuku siswa/i tidak panjang maka ketahap d
      cek jika siswa/i yang dicek sudah 40, maka ketahap e, jika tidak ketahap c
   c. beri hukuman, ke tahap b
   d. puji siswa/i, ke tahap b
   e. selesai
   
   PseudoCode:
   STORE 'siswa' with value 40
   STORE 'hitung' with 
   STORE 'kuku'   with true OR false //true kuku panjang, false kuku pendek

   WHILE 'hitung' , 'siswa'
    DO "CEK SISWA KE-" 'hitung'
        IF 'kuku' EQUALS true
            DO DISPLAY "Memuji Siswa/i"
        ELSE
            DO DISPLAY "Hukum Siswa/i"
        END IF
    SET 'hitung' = 'hitung' + 1
   END WHILE
   