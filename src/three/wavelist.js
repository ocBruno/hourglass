// here is waves list
export const waveList = [
    'z = sin(t)+sin(x-2*t)+cos(y+t)',
    'z = 1/log(2+sqrt(d))*cos(d-t)',
    'z = 1/log(2+sqrt(d))*cos(abs(d-2)-abs(x+y)-t)',
    
    /* Donthack */
    'z = (8/log(sqrt(d))*cos(d-0.4*t)) - cos( sin(2-y) + abs(d)) + (pi-(d-y)) +(0.5*sqrt(22/d)*(sin(x)+4)) + (x+3/(y-8)) + log(e)',
    
    /* Morpheus */
    'z = 6/log(sqrt(d))*cos(d-t)',
    
    /* Jingga Sona */
    'z = 1/log(+sqrt(d))*cos(d-x-y-z-t)',
    'z = 1/log(1+sqrt(d))*cos(d-t)',
    'z = cos(d - z-y- y+t) + (y / 3)',
    
    /* Haris */
    'z = sin(x*t/16-d)*cos(y*t/16+d)',
    
    /* Rowsej */
    'z = cos(d - t) + (y / 3)',
    'z = d < 1? 10 : (d < 2? 9 : (d < 3? 8 : (d < 4? 7 : (d < 5? 6 : (d < 6? 5 : (d < 7? 4 : (d < 8? 3 : (d < 9? 2 : (d < 10? 1 : 0))))))))) + cos(d - t)',
    
    /* Paul Caron */
    'z = 1*x%y/log(2+sqrt(d))*cos(d-t)',
    
    /* diamondweter */
    'z = 0.1/log(2-sqrt(d))*cos(d-t)',
    'z = abs(1/log(9+sqrt(d))*cos(x-y-t))',
    'z = abs(0.5/log(2+sqrt(d))*cos(x*y*d+t))',
    
    /* Микола Федосєєв */
    'z =5*sin(t+d)/(d+0.2)',
    'z = Math.atan2(x,y)',
    
    /* Jay */
    'z = sin(log(x)*t/4-d)*cos(log(y)*t/4+d)',
    
    /* code learner */
    'z = log(x*log(t)*y/cos(t))',
    'z =(abs(d)>(sqrt(x*y*d)+cos(t)+sin(2*pi*d*sqrt(t))+abs(x*y)))?log(abs(x*y)+1) + sin(d+cos(2*pi*abs(x*x*y))):log(abs(sin(t/5)))*(log(d+1))+4',
    'z = (d>0&x<d*pi)?cos(d) + cos(2*d+t):0',
    
    /* ⏩ Prometheus ⏪ */
    'z = d*sin(t)',
    'z = sqrt(d-cos(t))',
    
    /* Daniele Bonomi */
    'z = cos(t)*sin(d*3)*cos(d*3)*3',
    
    /* Mikhail Zabolotskikh */
    'z =-(d+cos(d)/2)+sin(t)',
    
    /* ロリポップさん */
    'z = cos(d-x-y-z-t)',
    'z = cos(log(y)*t/2+d)+1/log(sqrt(d))**2*cos(d-t)*sin(d-t)*pi',
    
    /* mayur\32agc */
    'z = sin(d-t) + cos(d-t)',
    'z = sin(d-t) * cos(d-t)',
    
    /* Bithi D */
    'z = -(d+sqrt(d)/2)+sin(t)+Math.atan2(x,y)*cos(d-t)',
    'z = d*sin(t)+cos(x-y-t)',
    'z = 1/log(1+sqrt(d))*cos(abs(d-2)-sin(x+y+d+t))',
    'z = 1*x%y/log(2+cos(d))*sin(d-t)',
    'z = sin(d + z-y+t) + cos(y / 9)',
    'z = Math.atan2(x,y)*cos(t)*sin(d)',
    'z = Math.atan2(x,y)*cos(t+d)',
    'z = Math.atan2(x,y)**cos(t+d)',
    'z = Math.atan2(x,y)+cos(t+d)',
    'z = d*sin(t)*cos(d)',
    'z = Math.atan2(x,y)*cos(t)',
    'z = sin(d-x-y+z+e+pi+t)',
    'z = Math.atan2(x,y,z,e)*e*cos(t)*sqrt(d)',
    'z = abs(3/log(+sqrt(d))*cos(x-t))',
    'z = 1/log(2+sqrt(d))*cos(t)*sin(d)',
    'z = 1/log(2+sqrt(d))*Math.random(d,t)*cos(t)',
    
    /* Nick */
    'z = sin(z + t - d) * sin(d * 3)',
    'z = sin(z + t - d) * sin(d * 0.25)',
    
    /* Ayberk Güngör */
    'z = Math.atan2(x,y)*cos(t-cos(d-10))',
    
    /* Tokodi Mihály */
    'z = x * y / (d + 1) * sin(t)',
    'z = x * y / (d + 1) * sin(t)^2',
    'z = (d+sin((t/10)*y*x)/10)+sin(d)',
    'z = Math.atan2(x,y) + 5*sin(t+d)/(d+0.2) + 1*x%y/log(2+sqrt(d))*cos(d-t)',
    'z = sin(x+y+t-sin(d))',
    'z = ((d*sin(t))*d/9-y*y)+4',
    'z = Math.tan(t-d-x-y)'
];
