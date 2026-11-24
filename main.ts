import{mkdirSync as M,readdirSync as D,readFileSync as F,writeFileSync as W}from'node:fs';
import{join as J}from'node:path';
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output',K="!2b%'+,0cccccccc*******&***&***c***cccccccccccccAEEA!ccccccccccc&)cccccccccccccc%%\"%",B=[(a,b)=>a+b|0,(a,b)=>a-b|0,(a,b)=>Math.imul(a,b),(a,b)=>{if(!b)throw 4;return(a/b)|0},(a,b)=>{if(!b)throw 4;return a%b|0},(a,b)=>{if(!b)throw 4;return(a>>>0)/(b>>>0)|0},(a,b)=>{if(!b)throw 4;return(a>>>0)%(b>>>0)|0},0,(a,b)=>a&b,(a,b)=>a|b,(a,b)=>a^b,0,(a,b)=>a<<b,(a,b)=>a>>b,(a,b)=>a>>>b|0,0,(a,b)=>a===b?1:0,(a,b)=>a<b?1:0,(a,b)=>(a>>>0)<(b>>>0)?1:0];
for(const i of D(I)){
 const r=R(F(J(I,i,'program.bin')),F(J(I,i,'input.bin')));
 M(J(O,i),{recursive:true});
 W(J(O,i,'stdout.bin'),Buffer.from(r.o));
 W(J(O,i,'exit.txt'),r.c+'\n');
}
function R(p,q){
 const A=new Int32Array(256),B2=new Int32Array(64),C=new Int32Array(256),o=[];
 let s=0,c=0,k=0,pc=0,t=0,n=p.length;
 try{
  for(;;){
   if(t===1e6)throw 10;
   if(pc<0||pc>=n)throw 9;
   const b=p[pc],z=K.charCodeAt(b)-33;
   if(b>83||z>65)throw 5;
   const f=z>>4,P=(z>>2)&3,Q=z&3;
   if(pc+f>=n)throw 9;
   t++;
   const x=pc+1+f;
   if(s<P)throw 2;
   if(s-P+Q>256)throw 3;
   pc=x;
   if(b>15&&b<35&&b!==23&&b!==27){A[s-2]=B[b-16](A[s-2],A[s-1]);s--;continue}
   switch(b){
    case 0:return{o,c:0};
    case 1:A[s++]=(p[x-1]<<24)>>24;break;
    case 2:A[s++]=p[x-4]|p[x-3]<<8|p[x-2]<<16|p[x-1]<<24;break;
    case 3:s--;break;
    case 4:A[s]=A[s-1];s++;break;
    case 5:{const v=A[s-1];A[s-1]=A[s-2];A[s-2]=v;break}
    case 6:A[s]=A[s-2];s++;break;
    case 7:{const a=A[s-3];A[s-3]=A[s-2];A[s-2]=A[s-1];A[s-1]=a;break}
    case 23:A[s-1]=-A[s-1]|0;break;
    case 27:A[s-1]=~A[s-1];break;
    case 48:case 49:case 50:{
     const e=((p[x-2]|p[x-1]<<8)<<16)>>16;
     let g=1;
     if(b!==48){const v=A[--s];g=b===49?v===0:v!==0}
     if(g)pc=x+e;
     break;
    }
    case 51:
     if(c===64)throw 7;
     B2[c++]=x;
     pc=p[x-2]|p[x-1]<<8;
     break;
    case 52:
     if(!c)throw 8;
     pc=B2[--c];
     break;
    case 64:{
     const d=A[s-1];
     if(d<0||d>=256)throw 6;
     A[s-1]=C[d];
     break;
    }
    case 65:{
     const d=A[s-1],v=A[s-2];
     if(d<0||d>=256)throw 6;
     s-=2;C[d]=v;
     break;
    }
    case 80:{
     const g=String(A[s-1]);
     if(o.length+g.length>65536)throw 11;
     s--;
     for(let h=0;h<g.length;h++)o.push(g.charCodeAt(h));
     break;
    }
    case 81:
     if(o.length+1>65536)throw 11;
     o.push(A[--s]&255);
     break;
    case 82:A[s++]=k<q.length?q[k++]:-1;break;
    case 83:return{o,c:A[--s]&255};
   }
  }
 }catch(c){return{o,c}}
}
