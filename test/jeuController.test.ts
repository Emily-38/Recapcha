import { describe, it, expect, vi } from 'vitest';
import { submitReponse } from '../src/controllers/JeuController'; 

  describe('submitReponse', () => {
    it('devrait rediriger vers /result si la réponse est true', () => {
      const mockLocation = { href: '' };
      vi.stubGlobal('window', { ...window, location: mockLocation });
  
      const reponse = true;
      submitReponse(reponse);
      expect(mockLocation.href).toBe('/result');
  
      vi.unstubAllGlobals();
    });
  
    it('devrait rediriger vers / si la réponse est false', () => {
      const mockLocation = { href: '' };
      vi.stubGlobal('window', { ...window, location: mockLocation });
  
      const reponse = false;
      submitReponse(reponse);
      expect(mockLocation.href).toBe('/');
  
      vi.unstubAllGlobals();
    });
  });