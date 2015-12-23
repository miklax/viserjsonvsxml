[
  '{{repeat(4000, 4000)}}',
  {
    index: '{{index()}}',
    age: '{{integer(20, 40)}}',
    name: '{{firstName()}} {{surname()}}',
    email: '{{email()}}',
    phone: '{{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}'
  }
]
