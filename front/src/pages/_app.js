// 导入全局样式
import '@/styles/globals.css'

export function reportWebVitals (metric) {
    console.log(metric)
}

// export function reportWebVitals(metric) {
//     switch (metric.name) {
//       case 'FCP':
//         // handle FCP results
//         break;
//       case 'LCP':
//         // handle LCP results
//         break;
//       case 'CLS':
//         // handle CLS results
//         break;
//       case 'FID':
//         // handle FID results
//         break;
//       case 'TTFB':
//         // handle TTFB results
//         break;
//       case 'INP':
//         // handle INP results (note: INP is still an experimental metric)
//         break;
//       default:
//         break;
//     }
//   }

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}
