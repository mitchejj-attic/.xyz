import Typography from 'typography'
import githubTheme from 'typography-theme-github'
import CodePlugin from 'typography-plugin-code'

githubTheme.plugins = [
  new CodePlugin()
]

githubTheme.overrideThemeStyles = ({ rhythm }, options) => ({
 /* h1: {
    borderBottom: 0,
    paddingBottom: `calc(${rhythm(1 / 4)} - 1px)`,
    marginBottom: rhythm(3 / 4),
    marginTop: rhythm(1.5),
    fontWeight: 400
  },
*/  ul: {
    listStyleType: 'none',
     lineHeight: 1.375
  }
})
const typography = new Typography(githubTheme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
