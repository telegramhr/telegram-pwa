/* global pp_gemius_hit */
export default function ({ route }) {
  if (process.client) {
    const path = route.path
    if (path.includes('politika-kriminal')) {
      pp_gemius_hit('B8LrC2M_SDgyAhNNdFR0m7bvPzHwbSNkjTfp3wsMi9T.T7')
    } else if (path.includes('biznis-tech')) {
      pp_gemius_hit('B8LlDWM_7dM4HvpilXmwCLbv353wbWMat5lj3jhrA2z.H7')
    } else if (path.includes('kultura')) {
      pp_gemius_hit('nczrCvuiSDiTTzjVqj3v_JeAfXAgAzrQTPxnBVuL3iv.d7')
    } else if (path.includes('sport')) {
      pp_gemius_hit('nSdLaPtwWDjz8rNOgspcbpbyP_ggyiNot0lj3JiKi6H.G7')
    } else if (path.includes('velike-price')) {
      pp_gemius_hit('nSbrCPtwSAGdwXMWSgCUMuVzP1IdASN00odjESlss0D.j7')
    } else if (path.includes('zivot')) {
      pp_gemius_hit('nSdLyvtwW.A9i9jJKh9.c_UTHZEdEXuOnL7hjdYBhsX.h7')
    } else {
      pp_gemius_hit('nSblbvtw7YnzUiC8AtarvJdS3yggumM2F_xjEZ.9W1..57')
    }
  }
}
