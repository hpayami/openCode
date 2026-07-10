# fa Glossary

## Sources

- PR #15835: https://github.com/anomalyco/opencode/pull/15835

## Do Not Translate (Locale Additions)

- `OpenCode` (preserve casing in prose, docs, and UI copy)
- Keep lowercase `opencode` in commands, package names, paths, URLs, and other exact identifiers
- Commands, flags, file paths, and code literals (keep exactly as written)
- `CLI`, `TUI`, `MCP`, `OAuth`, `API`, `LLM`, `Git`, `GitHub`

## Preferred Terms

| English / Context      | Preferred                   | Notes                                             |
| ---------------------- | --------------------------- | ------------------------------------------------- |
| token                  | توکن                        |                                   |
| session                | جلسه                        |                                                   |
| prompt                 | پرامپت                      |                                                   |
| model                  | مدل                         |                                                   |
| project                | پروژه                       |                                                   |
| file                   | فایل                        |                                                   |
| directory              | دایرکتوری                   |                                                   |
| repository             | مخزن                        |                                                   |
| branch                 | شاخه                        |                                                   |
| commit                 | تعهد (کامیت)                | Use کامیت in casual UI, تعهد for formal docs      |
| provider               | ارائه‌دهنده                 |                                                   |
| terminal               | ترمینال                     |                                                   |
| workspace              | workspace                   | Keep English                                      |
| context                | context                     | Keep English                                      |
| subscription           | اشتراک                      |                                                   |
| settings               | تنظیمات                     |                                                   |
| search                 | جستجو                       |                                                   |
| cancel                 | لغو                         |                                                   |
| submit                 | ارسال                       |                                                   |
| close                  | بستن                        |                                                   |
| save                   | ذخیره                       |                                                   |
| delete                 | حذف                         |                                                   |
| back                   | بازگشت                      |                                                   |
| next                   | بعدی                        |                                                   |
| previous               | قبلی                        |                                                   |

## Guidance

- Prefer natural Persian phrasing over literal translation
- Keep tone clear and direct in UI labels and docs prose
- Preserve technical artifacts exactly: commands, flags, code, URLs, model IDs, and file paths
- For RTL text, treat code, commands, and paths as LTR artifacts and keep their character order unchanged
- Use formal Persian (ادبی) for UI copy; avoid colloquial slang
- Merge broken sentence fragments into one clear sentence when the source is a single thought
- When the English source uses `{{variable}}`, keep it in the translated text

## Avoid

- Avoid translating product and protocol names that are fixed identifiers
- Avoid mixing multiple Persian terms for the same recurring UI action once a preferred term is established
- Avoid `مدل هوش مصنوعی` for `AI model` when the shorter `مدل` suffices in context
