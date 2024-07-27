const DEFAULT = {
  color: "bg-black text-white border-white",
};

const HTML = {
  key: "HTML",
  color: "bg-[#f06529] text-black border-[#f06529]",
};

const CSS = {
  color: "bg-[#2965f1] text-white border-[#2965f1]",
  key: "CSS",
};

const JAVASCRIPT = {
  color: "bg-[#F0DB4F] text-black border-[#F0DB4F]",
  key: "JAVASCRIPT",
};

const REACTJS = {
  color: "bg-[#61DBFB] text-black border-[#61DBFB]",
  key: "REACTJS",
};

const FLUTTER = {
  color: "bg-[#027DFD] text-white border-[#027DFD]",
  key: "FLUTTER",
};

const DJANGO = {
  color: "bg-[#092e20] text-white border-[#092e20]",
  key: "DJANGO",
};

const NODEJS = {
  color: "bg-[#339933] text-black border-[#339933]",
  key: "NODEJS",
};

const NEXTJS = {
  color: "bg-[#000000] text-white border-white",
  key: "NEXTJS",
};

const JAVA = {
  color: "bg-[#ED8B00] text-black border-[#ED8B00]",
  key: "JAVA",
};

const PYTHON = {
  color: "bg-[#4B8BBE] text-black border-[#4B8BBE]",
  key: "PYTHON",
};

const ANDROIDNATIVE = {
  color: "bg-[#3DDC84] text-black border-[#3DDC84]",
  key: "ANDROIDNATIVE",
};

const SPRING = {
  color: "bg-[#6DB33F] text-black border-[#6DB33F]",
  key: "SPRING",
};

const VUEJS = {
  color: "bg-[#42b883] text-black border-[#42b883]",
  key: "VUEJS",
};

const ANGULAR = {
  color: "bg-[#a6120d] text-white border-[#a6120d]",
  key: "ANGULAR",
};

const SVELTE = {
  color: "bg-[#FF3E00] text-black border-[#FF3E00]",
  key: "SVELTE",
};

const PHP = {
  color: "bg-[#777BB3] text-white border-[#777BB3]",
  key: "PHP",
};

const LARAVEL = {
  color: "bg-[#FF2D20] text-white border-[#FF2D20]",
  key: "LARAVEL",
};

const MYSQL = {
  color: "bg-[#00758F] text-white border-[#00758F]",
  key: "MYSQL",
};

const POSTGRESQL = {
  color: "bg-[#008bb9] text-white border-[#008bb9]",
  key: "POSTGRESQL",
};

const MONGODB = {
  color: "bg-[#00ED64] text-black border-[#00ED64]",
  key: "MONGODB",
};

const NESTJS = {
  color: "bg-[#E11E4D] text-white border-[#E11E4D]",
  key: "NESTJS",
};

const GOLANG = {
  color: "bg-[#00ADD8] text-black border-[#00ADD8]",
  key: "GOLANG",
};

const KOTLIN = {
  color: "bg-[#B125EA] text-white border-[#B125EA]",
  key: "KOTLIN",
};

const TechStack = (key: string) => {
  switch (key.toUpperCase().replaceAll(".", "").replaceAll(" ", "")) {
    case HTML.key:
      return HTML.color;
    case CSS.key:
      return CSS.color;
    case JAVASCRIPT.key:
      return JAVASCRIPT.color;
    case REACTJS.key:
      return REACTJS.color;
    case FLUTTER.key:
      return FLUTTER.color;
    case FLUTTER.key:
      return FLUTTER.color;
    case DJANGO.key:
      return DJANGO.color;
    case NODEJS.key:
      return NODEJS.color;
    case NEXTJS.key:
      return NEXTJS.color;
    case JAVA.key:
      return JAVA.color;
    case PYTHON.key:
      return PYTHON.color;
    case ANDROIDNATIVE.key:
      return ANDROIDNATIVE.color;
    case SPRING.key:
      return SPRING.color;
    case VUEJS.key:
      return VUEJS.color;
    case ANGULAR.key:
      return ANGULAR.color;
    case SVELTE.key:
      return SVELTE.color;
    case PHP.key:
      return PHP.color;
    case LARAVEL.key:
      return LARAVEL.color;
    case MYSQL.key:
      return MYSQL.color;
    case POSTGRESQL.key:
      return POSTGRESQL.color;
    case MONGODB.key:
      return MONGODB.color;
    case NESTJS.key:
      return NESTJS.color;
    case GOLANG.key:
      return GOLANG.color;
    case KOTLIN.key:
      return KOTLIN.color;
    default:
      return DEFAULT.color;
  }
};

export { TechStack };
