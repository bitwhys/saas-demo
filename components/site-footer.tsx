const navigation = [
  {
    name: 'Twitter',
    href: '#',
    icon: props => (
      <svg viewBox="0 0 1200 1227" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: '#',
    icon: props => (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
          strokeLinejoin="round"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          fill="currentColor"
          d="M20.88 6.72C22.76 5 21.7 2 21.7 2C21.7 2 18.7 2 17.65 3.87C17.05 3.65 16.41 3.51 15.74 3.51H12.77C12.12 3.51 11.5 3.64 10.92 3.85C9.87003 2 6.89003 2 6.89003 2C6.89003 2 5.84003 5 7.71003 6.72C7.71003 6.72 7.22003 8.19 7.22003 9.07C7.22003 11.73 9.11003 13.96 11.61 14.5C11.43 14.88 11.33 15.29 11.33 15.73V18.61C10.64 18.77 8.97003 19.39 8.41003 17.68C7.96003 16.31 5.98003 13.74 3.34003 14C2.53003 14.07 1.93003 14.79 2.01003 15.6C2.09003 16.41 2.80003 17.02 3.61003 16.93C3.97003 16.89 5.12003 17.39 5.67003 18.77C6.01003 19.61 6.32003 20.4 6.95003 20.93C7.62003 21.51 8.50003 21.69 9.36003 21.69C9.86003 21.69 11.21 21.62 11.64 21.54C12.12 22.51 17.19 21.86 17.19 20.25V15.72C17.19 15.28 17.08 14.86 16.91 14.49C19.41 13.95 21.3 11.72 21.3 9.06C21.3 8.14 20.88 6.72 20.88 6.72Z"
        ></path>
      </svg>
    ),
  },
]

export const SiteFooter = () => (
  <footer className="w-full">
    <div className="mx-auto max-w-6xl border-t px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
      <div className="flex justify-center space-x-6 md:order-2">
        {navigation.map(item => (
          <a key={item.name} href={item.href} className="hover:text-muted-foreground">
            <span className="sr-only">{item.name}</span>
            <item.icon className="h-6 w-6" aria-hidden="true" />
          </a>
        ))}
      </div>
      <div className="mt-8 md:order-1 md:mt-0">
        <p className="text-center text-xs leading-5 text-stone-500">
          &copy; 2024 Creightive, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
)
