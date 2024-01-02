export interface ShadcnColorTokens {
  background: string
  foreground: string

  card: string
  cardForeground: string

  popover: string
  popoverForeground: string

  primary: string
  primaryForeground: string

  secondary: string
  secondaryForeground: string

  muted: string
  mutedForeground: string

  accent: string
  accentForeground: string

  destructive: string
  destructiveForeground: string

  border: string
  input: string
  ring: string
}
export interface ShadcnCompatibleTheme {
  light: ShadcnColorTokens
  dark: ShadcnColorTokens
  radius: string
}
