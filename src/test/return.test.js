import { describe, test, expect } from 'vitest';
// import { log } from './src/tools/helpers.js';

const isAuthorized = (age, role) => role === 'admin' && age >= 18;

describe('isAuthorized', () => {
  test('not admin', () => {
    expect(isAuthorized(20, 'user')).toBe(false);
  });
  test('minor', () => {
    expect(isAuthorized(14, 'admin')).toBe(false);
  });
  test('major and admin', () => {
    expect(isAuthorized(20, 'admin')).toBe(true);
  });
});

// Early return
function calculateTotalPrice(quantity, price, isMember, promoCode) {
  if (quantity <= 0) {
    throw new Error('La quantité doit être strictement positive');
  }
  if (price <= 0) {
    throw new Error('Le prix unitaire doit être strictement positif');
  }

  let totalPrice = quantity * price;
  if (!isMember) {
    return totalPrice;
  }

  totalPrice *= 0.9; // Remise de 10% pour les membres

  if (promoCode !== 'SOLDES') {
    return totalPrice;
  }
  totalPrice *= 0.5;
  return totalPrice; // Remise supplémentaire de 50% avec le code promo
}

/* - Ne pas modifier - */
describe('calculateTotalPrice', () => {
  test('Prix pour un membre avec code promo', () => {
    expect(calculateTotalPrice(2, 50, true, 'SOLDES')).toBe(45);
  });

  test('Prix pour un membre sans code promo', () => {
    expect(calculateTotalPrice(2, 50, true, '')).toBe(90);
  });

  test('Prix pour un non-membre sans code promo', () => {
    expect(calculateTotalPrice(2, 50, false, '')).toBe(100);
  });

  test('Erreur si la quantité est négative', () => {
    expect(() => calculateTotalPrice(-1, 50, false, '')).toThrow(
      'La quantité doit être strictement positive'
    );
  });

  test('Erreur si le prix est négatif', () => {
    expect(() => calculateTotalPrice(2, -50, false, '')).toThrow(
      'Le prix unitaire doit être strictement positif'
    );
  });
});
