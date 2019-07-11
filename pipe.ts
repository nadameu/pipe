type fn<a, b> = (_: a) => b;

// prettier-ignore
export const pipe: {
	<a>(x:a): a;
	<a,b>(x:a, f0:fn<a,b>): b;
	<a,b,c>(x:a, f0:fn<a,b>, f1:fn<b,c>): c;
	<a,b,c,d>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>): d;
	<a,b,c,d,e>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>): e;
	<a,b,c,d,e,f>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>): f;
	<a,b,c,d,e,f,g>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>, f5:fn<f,g>): g;
	<a,b,c,d,e,f,g,h>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>, f5:fn<f,g>, f6:fn<g,h>): h;
	<a,b,c,d,e,f,g,h,i>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>, f5:fn<f,g>, f6:fn<g,h>, f7:fn<h,i>): i;
	<a,b,c,d,e,f,g,h,i,j>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>, f5:fn<f,g>, f6:fn<g,h>, f7:fn<h,i>, f8:fn<i,j>): j;
	<a,b,c,d,e,f,g,h,i,j,k>(x:a, f0:fn<a,b>, f1:fn<b,c>, f2:fn<c,d>, f3:fn<d,e>, f4:fn<e,f>, f5:fn<f,g>, f6:fn<g,h>, f7:fn<h,i>, f8:fn<i,j>, f9:fn<j,k>): k;
} = (x: unknown, ...fs: Function[]): unknown =>
	fs.reduce<unknown>((y, f) => f(y), x);
