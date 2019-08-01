type fn<a, b> = (_: a) => b;

export function pipe<a>                     (x: a)                                                                                                                                   : a;
export function pipe<a,b>                   (x: a, f0: fn<a,b>)                                                                                                                      : b;
export function pipe<a,b,c>                 (x: a, f0: fn<a,b>, f1: fn<b,c>)                                                                                                         : c;
export function pipe<a,b,c,d>               (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>)                                                                                            : d;
export function pipe<a,b,c,d,e>             (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>)                                                                               : e;
export function pipe<a,b,c,d,e,f>           (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>)                                                                  : f;
export function pipe<a,b,c,d,e,f,g>         (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>, f5: fn<f,g>)                                                     : g;
export function pipe<a,b,c,d,e,f,g,h>       (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>, f5: fn<f,g>, f6: fn<g,h>)                                        : h;
export function pipe<a,b,c,d,e,f,g,h,i>     (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>, f5: fn<f,g>, f6: fn<g,h>, f7: fn<h,i>)                           : i;
export function pipe<a,b,c,d,e,f,g,h,i,j>   (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>, f5: fn<f,g>, f6: fn<g,h>, f7: fn<h,i>, f8: fn<i,j>)              : j;
export function pipe<a,b,c,d,e,f,g,h,i,j,k> (x: a, f0: fn<a,b>, f1: fn<b,c>, f2: fn<c,d>, f3: fn<d,e>, f4: fn<e,f>, f5: fn<f,g>, f6: fn<g,h>, f7: fn<h,i>, f8: fn<i,j>, f9: fn<j,k>) : k;
export function pipe(x:any, ...fs:any[]) {
	return fs.reduce((y,f) => f(y), x);
}

export default pipe;