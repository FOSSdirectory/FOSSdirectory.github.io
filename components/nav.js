class Nav extends HTMLElement {
  constructor() {
      super();
      this.classes = ['Index', 'Projects', 'Resume'];
  }
    connectedCallback(){
        let current = this.getAttribute('current')
	this.innerHTML =
` <nav id="nav">
    <ul>
       <li class="Index"><a href="index.html">Welcome</a></li>
       <li class="Projects">
         <a href="projects.html">Projects</a>
         <ul>
           <li><a href="#">Project Name 1</a></li>
           <li><a href="#">Project Name 2</a></li>
           <li><a href="#">Project Name 3</a></li>
           </ul>
       </li>
       <li class="Resume"><a href="resume.html">Resume</a></li>
    </ul>
</nav>`
	console.log(this.classes)
	let i;
	for (i in this.classes) {
	    console.log(i)
	    if (this.classes[i] == current){
		document.querySelector("."+this.classes[i]).setAttribute('class', 'current '+ this.classes[i])
	    }else{
		document.querySelector("."+this.classes[i]).removeAttribute('class', 'current')
	    }
	}
	console.log(this.innerHTML)
    }
}

customElements.define('nav-component', Nav)
