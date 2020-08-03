    function set(op) {
        let opLenght = document.getElementById("display").value += op;
        for (let i = 0; i < opLenght.length; i++) {
            if ((op == "+" ||
                    op == "-" ||
                    op == "*" ||
                    op == "/"
                ) && (opLenght[i - 1] == opLenght[i]))
                opLenght.value += "";
            else
                opLenght.value += op;
        }
    }

    function cosine() {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = eval(Math.cos(tempStore));

    }

    function sine() {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = eval(Math.sin(tempStore));

    }

    function answer() {
        try {
            var Exp = document.getElementById("display");
            var Exp1 = Exp.value;
            var result = eval(Exp1);
            Exp.value = result;
        } catch {
            alert("Phép toán không hợp lệ")
        }
    }

    function c() {
        var element = document.getElementById("display").value;
        var length = element.length;
        length--;
        var chuoiSauXoa = element.substr(0, length);
        document.getElementById("display").value = chuoiSauXoa;
    }

    function del() {
        document.getElementById("display").value = "";
    }

    function tan() {
        var tempStore = document.getElementById("display").value;
        document.getElementById("display").value = eval(Math.tan(tempStore));
    }