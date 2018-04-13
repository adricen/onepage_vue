var layout_page = new Vue({

  el: '#main',
  data: {
    // Simple structures
    init: "first page",
    bind: projectList,
  },
  methods: {
    // Automation
    tuiles: function () {
      console.log(this);
      var datas = bind.sort(function(a, b) {
         return a.DepartmentName.localeCompare(b.DepartmentName);
      })
      console.log(projectList);
      console.log('heyyeyye');
    },

  },
  computed: {
    // trigger function

  }

});



// console.log(projectList);


  /*
  $.get( 'md_files/' + value.index, function( markdownContent ) {
    layout_page.markdown[name].content = marked( markdownContent )
  },'html').fail(function(){
    console.log('Mauvais chargement des docs')
  }).done(function( ) {
    // Modal Img Creation
    if( control_stop < size ){
      var images = $('.markdown-body').find('img')
      // console.log(images);
      images.each(function(){
        $(this).on('click', function(){
          layout_page.template.imgSrc_modal = this.src;
          layout_page.seen.modal = true;
        })
      })
      control_stop++
    }
  })
  */
