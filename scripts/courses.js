/*================ VOLTAR PÁGINA ================= */
const buttonBack = document.querySelector('section#course-details .course-header > span')

function pageBack() {    
    history.back()
}

buttonBack.addEventListener('click', pageBack)


/*================ CARDS EXTERNOS ================= */
const externalCardLink = document.querySelectorAll('.external-card')

for (let i = 0; i < externalCardLink.length; i++) {
    externalCardLink[i].addEventListener('click', acessarExterno)
    function acessarExterno() {
        if (location.pathname == '/views/rdc.html') {
            switch (i) {
                case 0:
                    window.open('http://meet.google.com/yno-qynd-uee', "_blank")
                    break
            
                case 1:
                    window.open('https://nead.ifb.edu.br/course/view.php?id=9439', "_blank")
                    break
                    
                case 2:
                    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                    break
            
                case 3:
                    window.open('https://drive.google.com/file/d/13sQahc9SMs0UwfJJxElr_PJvOW3Z4y4U/view', "_blank") 
                    break
            }
        }
        else if (location.pathname == '/views/ldp.html') {
            switch (i) {
                case 0:
                    window.open('https://meet.google.com/pdb-ghny-jfr', "_blank")
                    break
            
                case 1:
                    window.open('https://nead.ifb.edu.br/course/view.php?id=9467', "_blank")
                    break
                    
                case 2:
                    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                    break
            
                case 3:
                    window.open('https://drive.google.com/file/d/1_vjoapABIX6EIehDurWbu2psHta12C-W/view', "_blank") 
                    break
            }
        }
        else if (location.pathname == '/views/iac.html') {
            switch (i) {
                case 0:
                    window.open('https://meet.google.com/wnd-dakj-ocu', "_blank")
                    break
            
                case 1:
                    window.open('https://classroom.google.com/u/5/c/MzQ1OTgzNTU4NDY3', "_blank")
                    break
                    
                case 2:
                    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                    break
            
                case 3:
                    window.open('https://drive.google.com/file/d/1JYfzKBvisY-WpJJcszN9bBH0qjYd_dAL/view', "_blank") 
                    break
            }
        }
        else if (location.pathname == '/views/cpi.html') {
            switch (i) {
                case 0:
                    window.open('https://meet.google.com/bzi-gjmb-gbq', "_blank")
                    break
            
                case 1:
                    window.open('https://nead.ifb.edu.br/course/view.php?id=9620', "_blank")
                    break
                    
                case 2:
                    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                    break
            
                case 3:
                    window.open('https://drive.google.com/file/d/1wG2CDmpap8DKl8JP6Xc003qaEfCFB7BP/view', "_blank") 
                    break
            }
        }
        else {
            switch (i) {
                case 0:
                    window.open('https://meet.google.com/pzs-jbcw-sib', "_blank")
                    break
            
                case 1:
                    window.open('https://nead.ifb.edu.br/course/view.php?id=9186', "_blank")
                    break
                    
                case 2:
                    window.open('https://portaldoestudante.ifb.edu.br/', "_blank")
                    break
            
                case 3:
                    window.open('https://drive.google.com/file/d/1gFpSj-mRyOhl-zO1TUo-d3NvGICn97Pj/view', "_blank") 
                    break
            }
        }
    }
}