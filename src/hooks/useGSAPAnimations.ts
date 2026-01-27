/**
 * DEPRECATED: This file is kept for compatibility but no longer used
 * 
 * Migration to Framer Motion:
 * - Replace with useScrollAnimation hook from './useScrollAnimation'
 * - Or use Framer Motion's whileInView directly in components
 * 
 * Benefits of new approach:
 * ✅ Simpler API - no manual setup
 * ✅ Better React integration
 * ✅ Automatic cleanup
 * ✅ Smaller bundle size
 * ✅ TypeScript support
 * 
 * Old GSAP way:
 * useGSAPAnimations();
 * <div className="fade-init">Content</div>
 * 
 * New Framer Motion way:
 * <motion.div
 *   initial={{ opacity: 0, y: 50 }}
 *   whileInView={{ opacity: 1, y: 0 }}
 *   viewport={{ once: true }}
 *   transition={{ duration: 0.6 }}
 * >
 *   Content
 * </motion.div>
 * 
 * See: src/hooks/useScrollAnimation.tsx for modern patterns
 */

// Empty hook for backwards compatibility
// Components can be gradually migrated to Framer Motion
export const useGSAPAnimations = () => {
  // No-op - GSAP animations replaced with Framer Motion
  // This prevents errors in components still calling this hook
  return;
};

export default useGSAPAnimations;
