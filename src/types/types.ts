export interface Product {
    gid: string,
    gname: string,
    gprice: string,
    count: number,
    sum: number,
    Priority_value: number,
    gquantity: number,
}


export interface Section {
    description: string,
    goods: Product[],
    icon: string,
    resource_id: string,
    rid: string,
    rlevel: string,
    rname: string,
    rparent: string,
    rposition: string,
    rtime: string,
    rtitle: string,
    urlalias: string,
  }