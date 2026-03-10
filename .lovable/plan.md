

## Replace Logos with User-Provided Images

Copy the 7 uploaded logo files to `public/images/learners/`, replacing the existing generated versions.

### File Mappings
| Upload | Target |
|--------|--------|
| `user-uploads://swiggy.png` | `public/images/learners/swiggy.png` |
| `user-uploads://image.png` (Meta) | `public/images/learners/meta.png` |
| `user-uploads://image-2.png` (Ashoka) | `public/images/learners/ashoka.png` |
| `user-uploads://image-3.png` (Symbiosis) | `public/images/learners/symbiosis.png` |
| `user-uploads://image-4.png` (IIM) | `public/images/learners/iim.png` |
| `user-uploads://image-5.png` (CRED) | `public/images/learners/cred.png` |
| `user-uploads://image-6.png` (Christ) | `public/images/learners/christ.png` |

### Background Removal
Some logos have solid backgrounds (Swiggy has orange, CRED has black). These need transparent backgrounds to sit cleanly on the `#FCF7EF` cream section. Will use image generation to remove backgrounds where needed:
- **Swiggy**: Orange square bg → transparent, keep orange pin icon
- **CRED**: Black square bg → transparent, keep white/silver shield (may need dark version for cream bg)
- **Meta, Ashoka, IIM, Christ, Symbiosis**: Already on white/light bg — copy directly (white blends with cream)

### No code changes
`LearnersFrom.tsx` already references these exact file paths — only the image assets change.

