// ==========================================
// DARSDA KO'RILADIGAN BEGIN MASALALARI
// ==========================================

// Begin1: Doiraning radiusi R berilgan. Uning uzunligi L va yuzasi S aniqlansin.
function begin1(R) {
    const L = 2 * Math.PI * R;
    const S = Math.PI * Math.pow(R, 2);
    console.log(`Begin1 -> Uzunligi (L): ${L.toFixed(2)}, Yuzasi (S): ${S.toFixed(2)}`);
}

// Begin2: Ikkita manfiy bo'lmagan son a va b berilgan. Ularning o'rta geometrigi G aniqlansin.
function begin2(a, b) {
    const G = Math.sqrt(a * b);
    console.log(`Begin2 -> O'rta geometrigi (G): ${G.toFixed(2)}`);
}

// Begin3: x ning qiymati berilganda y funksiyaning qiymati aniqlansin. y = 3*x^6 - 6*x^2 - 7
function begin3(x) {
    const y = 3 * Math.pow(x, 6) - 6 * Math.pow(x, 2) - 7;
    console.log(`Begin3 -> y ning qiymati: ${y}`);
}

// Begin4: X kg konfet A so'm turadi. 1 kg va Y kg konfet qancha turishini aniqlash.
function begin4(X, A, Y) {
    const pricePerKg = A / X;
    const costY = pricePerKg * Y;
    console.log(`Begin4 -> 1 kg: ${pricePerKg} so'm, ${Y} kg: ${costY} so'm`);
}

// Begin5: Berilgan A va B sonlarining qiymatlarini almashtiring.
function begin5(A, B) {
    console.log(`Begin5 -> Boshlang'ich: A = ${A}, B = ${B}`);
    let temp = A;
    A = B;
    B = temp;
    console.log(`Begin5 -> Almashtirilgan: A = ${A}, B = ${B}`);
}


// ==========================================
// DARSDA KO'RILADIGAN INTEGER MASALALARI
// ==========================================

// Integer1: Ikki xonali son berilgan. O'nliklar va birlar xonasidagi raqam hamda ularning yig'indisi.
function integer1(n) {
    const unlik = Math.floor(n / 10);
    const birlik = n % 10;
    const yigindi = unlik + birlik;
    console.log(`Integer1 -> O'nlik: ${unlik}, Birlik: ${birlik}, Yig'indi: ${yigindi}`);
}

// Integer2: Ikki xonali son berilgan. Raqamlari o'rnini almashtirishdan hosil bo'lgan son.
function integer2(n) {
    const unlik = Math.floor(n / 10);
    const birlik = n % 10;
    const result = birlik * 10 + unlik;
    console.log(`Integer2 -> Boshlang'ich: ${n}, Almashtirilgan: ${result}`);
}

// Integer3: Uch xonali son berilgan. Yuzlar xonasidagi raqamni aniqlash.
function integer3(n) {
    const yuzlik = Math.floor(n / 100);
    console.log(`Integer3 -> ${n} sonining yuzlar xonasi: ${yuzlik}`);
}

// Integer4: 999 dan katta son berilgan. Yuzliklar xonasidagi sonni aniqlash. (Masalan: 1239 -> 2)
function integer4(n) {
    const yuzlik = Math.floor((n % 1000) / 100);
    console.log(`Integer4 -> ${n} sonining yuzliklar xonasi: ${yuzlik}`);
}

// Integer5: Kun boshidan boshlab N sekund o'tti. Soat, minut va sekundni aniqlash.
function integer5(N) {
    const soat = Math.floor(N / 3600);
    const minut = Math.floor((N % 3600) / 60);
    const sekund = N % 60;
    console.log(`Integer5 -> ${N} sekund = ${soat} soat, ${minut} minut, ${sekund} sekund`);
}


// ==========================================
// UYGA VAZIFA BEGIN MASALALARI (1-15)
// ==========================================

function uygaBegin1(a, b) {
    const S = a * b;
    const P = 2 * (a + b);
    console.log(`Uyga Begin1 -> Yuzasi: ${S}, Perimetri: ${P}`);
}

function uygaBegin2(d) {
    const pi = 3.14;
    const r = d / 2;
    const L = pi * d;
    const S = pi * Math.pow(r, 2);
    console.log(`Uyga Begin2 -> Uzunligi: ${L}, Yuzasi: ${S}`);
}

function uygaBegin3(a) {
    const V = Math.pow(a, 3);
    const S = 6 * Math.pow(a, 2);
    console.log(`Uyga Begin3 -> Hajmi: ${V}, To'la sirti: ${S}`);
}

function uygaBegin4(a, b, c) {
    const V = a * b * c;
    const S = 2 * (a * b + b * c + a * c);
    console.log(`Uyga Begin4 -> Hajmi: ${V}, To'la sirti: ${S}`);
}

function uygaBegin5(a, b) {
    const M = (a + b) / 2;
    console.log(`Uyga Begin5 -> O'rta arifmetik: ${M}`);
}

function uygaBegin6(a, b) {
    const c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    const P = a + b + c;
    console.log(`Uyga Begin6 -> Gipotenuza (c): ${c.toFixed(2)}, Perimetr: ${P.toFixed(2)}`);
}

function uygaBegin7(r1, r2) {
    const S1 = Math.PI * Math.pow(r1, 2);
    const S2 = Math.PI * Math.pow(r2, 2);
    const S = Math.PI * (Math.pow(r1, 2) - Math.pow(r2, 2));
    console.log(`Uyga Begin7 -> S1: ${S1.toFixed(2)}, S2: ${S2.toFixed(2)}, Ayirma S: ${S.toFixed(2)}`);
}

function uygaBegin8(L) {
    const pi = 3.14;
    const R = L / (2 * pi);
    const S = pi * Math.pow(R, 2);
    console.log(`Uyga Begin8 -> Radiusi: ${R.toFixed(2)}, Yuzasi: ${S.toFixed(2)}`);
}

function uygaBegin9(x1, y1, x2, y2) {
    const L = Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    console.log(`Uyga Begin9 -> Masofa: ${L.toFixed(2)}`);
}

function uygaBegin10(A, B, C) {
    console.log(`Uyga Begin10 -> Boshlang'ich: A=${A}, B=${B}, C=${C}`);
    const tempA = A;
    const tempB = B;
    const tempC = C;
    A = tempC;
    B = tempA;
    C = tempB;
    console.log(`Uyga Begin10 -> Yangi: A=${A}, B=${B}, C=${C}`);
}

function uygaBegin11(x) {
    const y = 4 * Math.pow(x - 3, 6) - 7 * Math.pow(x - 3, 3) + 2;
    console.log(`Uyga Begin11 -> y: ${y}`);
}

function uygaBegin12(A) {
    console.log(`Uyga Begin12 -> A^3: ${Math.pow(A,3)}, A^6: ${Math.pow(A,6)}, A^9: ${Math.pow(A,9)}, A^15: ${Math.pow(A,15)}`);
}

function uygaBegin13(Tf) {
    const Tc = (Tf - 32) * 5 / 9;
    console.log(`Uyga Begin13 -> Selsiy: ${Tc.toFixed(2)}`);
}

function uygaBegin14(X, A, Y, B) {
    const shokoladKg = A / X;
    const konfetKg = B / Y;
    const farq = shokoladKg - konfetKg;
    console.log(`Uyga Begin14 -> Farq: ${farq} so'm`);
}

function uygaBegin15(X, A, Y, B) {
    const jami = (X * A) + (Y * B);
    console.log(`Uyga Begin15 -> Jami savdo: ${jami} so'm`);
}


// ==========================================
// UYGA VAZIFA INTEGER MASALALARI (1-10)
// ==========================================

function uygaInteger1(n) {
    const birlik = n % 10;
    const unlik = Math.floor((n % 100) / 10);
    console.log(`Uyga Integer1 -> Birlik: ${birlik}, O'nlik: ${unlik}`);
}

function uygaInteger2(n) {
    const yuzlik = Math.floor(n / 100);
    const unlik = Math.floor((n % 100) / 10);
    const birlik = n % 10;
    console.log(`Uyga Integer2 -> Yig'indi: ${yuzlik + unlik + birlik}`);
}

function uygaInteger3(n) {
    const yuzlik = Math.floor(n / 100);
    const unlik = Math.floor((n % 100) / 10);
    const birlik = n % 10;
    const res = birlik * 100 + unlik * 10 + yuzlik;
    console.log(`Uyga Integer3 -> Teskari: ${res}`);
}

function uygaInteger4(n) {
    const yuzlik = Math.floor(n / 100);
    const unlik = Math.floor((n % 100) / 10);
    const birlik = n % 10;
    const res = unlik * 100 + yuzlik * 10 + birlik;
    console.log(`Uyga Integer4 -> Natija: ${res}`);
}

function uygaInteger5(n) {
    const yuzlik = Math.floor(n / 100);
    const unlik = Math.floor((n % 100) / 10);
    const birlik = n % 10;
    const res = yuzlik * 100 + birlik * 10 + unlik;
    console.log(`Uyga Integer5 -> Natija: ${res}`);
}

function uygaInteger6(n) {
    const minglik = Math.floor((n % 10000) / 1000);
    console.log(`Uyga Integer6 -> Mingliklar xonasi: ${minglik}`);
}

function uygaInteger7(N) {
    const minut = Math.floor(N / 60);
    console.log(`Uyga Integer7 -> O'tgan minutlar: ${minut}`);
}

function uygaInteger8(N) {
    const soat = Math.floor(N / 3600);
    console.log(`Uyga Integer8 -> O'tgan soatlar: ${soat}`);
}

function uygaInteger9(N) {
    const minut = Math.floor(N / 60);
    const sekund = N % 60;
    console.log(`Uyga Integer9 -> ${minut} minut, ${sekund} sekund`);
}

function uygaInteger10(N) {
    const soat = Math.floor(N / 3600);
    const sekund = N % 60;
    console.log(`Uyga Integer10 -> ${soat} soat, ${sekund} sekund`);
}


// ==========================================
// TEST QILISH (FUNKSIYALARNI ISHGA TUSHIRISH)
// ==========================================
console.log("--- BARCHA MASALALAR NATIJALARI --- \n");

// Dars masalalari testi
begin1(5);
integer1(48);

// Uyga vazifa masalalari testi
uygaBegin1(4, 5);
uygaInteger1(382);