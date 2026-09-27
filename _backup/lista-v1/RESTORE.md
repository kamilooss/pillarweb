# Backup podstrony /lista — wersja pierwsza (wszystkie 15 punktów naraz)

Zrobiony 2026-09-27, przed przebudową na „jedno pytanie na raz”.

**Jak wyglądała ta wersja:** hero bez zdjęcia, sekcje „Zanim zaczniesz” i „Jak
przejść ten test” rozwinięte na stałe, wszystkie 15 punktów jeden pod drugim,
odpowiedzi TAK/NIE, opis punktu („Jeśli nie” + „Naprawa”) schowany pod
przełącznikiem „O co chodzi w tym punkcie?”.

**Dlaczego się zmieniło:** feedback od znajomego Kamila — za dużo tekstu naraz,
strona przytłacza.

## Co tu jest
- `content-lista.ts` → `app/lib/content-lista.ts`
- `ChecklistTest.tsx` → `app/components/ChecklistTest.tsx`
- `ListaSections.tsx` → `app/components/ListaSections.tsx`
- `PdfDownloadButton.tsx` → `app/components/PdfDownloadButton.tsx`
- `lista-page.tsx` → `app/lista/page.tsx` (uwaga na zmianę nazwy pliku)

## Jak wrócić do tej wersji
1. Skopiuj cztery pierwsze pliki z tego folderu do wskazanych wyżej ścieżek
   (nadpisz).
2. Skopiuj `lista-page.tsx` do `app/lista/page.tsx`.
3. Zapisz — dev server podchwyci zmianę.

Nic poza tymi plikami nie trzeba ruszać: `/lista` nie dzieli komponentów
z resztą serwisu poza `Header`, `Footer`, `Button`, `Reveal` i `ContactSection`,
a te zostają bez zmian.

## Druga siatka bezpieczeństwa (git)
Stan tej wersji = commit `35c825a`. Podgląd:
```bash
git show 35c825a:app/components/ChecklistTest.tsx
git show 35c825a:app/lib/content-lista.ts
git show 35c825a:app/components/ListaSections.tsx
git show 35c825a:app/lista/page.tsx
```
