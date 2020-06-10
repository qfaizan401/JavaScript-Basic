//The Temperature Converter

var F_temp; C_temp = 25

F_temp = (C_temp*(9/5))+32
document.write(C_temp,"<sup>o</sup>C is ",F_temp,"<sup>o</sup>F","<br/>")

C_temp = (F_temp-32)*(5/9)
document.write(F_temp,"<sup>o</sup>F is ",C_temp,"<sup>o</sup>C")