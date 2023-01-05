"use strict";(self.webpackChunkpaymenterdocs=self.webpackChunkpaymenterdocs||[]).push([[278],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,f=u["".concat(l,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(f,i(i({ref:t},d),{},{components:n})):a.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5218:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3,description:"Instructions on how to configure databases for Paymenter."},i="Install & Setup Database",s={unversionedId:"installation/install-db",id:"installation/install-db",title:"Install & Setup Database",description:"Instructions on how to configure databases for Paymenter.",source:"@site/docs/installation/install-db.md",sourceDirName:"installation",slug:"/installation/install-db",permalink:"/docs/installation/install-db",draft:!1,editUrl:"https://github.com/Paymenter/docs/edit/main/docs/installation/install-db.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"Instructions on how to configure databases for Paymenter."},sidebar:"tutorialSidebar",previous:{title:"Download the code",permalink:"/docs/installation/download"},next:{title:"Setting up the config",permalink:"/docs/installation/edit-config"}},l={},p=[{value:"Environment Configuration",id:"environment-configuration",level:2},{value:"Database Setup",id:"database-setup",level:2},{value:"Add The First User",id:"add-the-first-user",level:2}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install--setup-database"},"Install & Setup Database"),(0,r.kt)("admonition",{title:"Database Configuration",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"You will need a database setup and a user with the correct permissions created for that database before continuing any further. See below to create a user and database for your Paymenter panel quickly. To find more detailed information please have a look at Setting up MySQL."),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"mysql -u root -p\n\n# Remember to change 'yourPassword' below to be a unique password\nCREATE USER 'paymenter'@'127.0.0.1' IDENTIFIED BY 'yourPassword';\nCREATE DATABASE paymenter;\nGRANT ALL PRIVILEGES ON paymenter.* TO 'paymenter'@'127.0.0.1' WITH GRANT OPTION;\nexit\n"))),(0,r.kt)("p",null,"First we will copy over our default environment settings file, install core dependencies, and then generate a new application encryption key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp .env.example .env\ncomposer install --no-dev --optimize-autoloader\n\n# Only run the command below if you are installing this Panel for\n# the first time and do not have any Paymenter Panel data in the database.\nphp artisan key:generate --force\n")),(0,r.kt)("admonition",{type:"danger"},(0,r.kt)("p",{parentName:"admonition"},"Back up your encryption key (APP_KEY in the .env file). It is used as an encryption key for all data that needs to be stored securely (e.g. user passwords). Store it somewhere safe - not just on your server. If you lose it all encrypted data is irrecoverable -- even if you have database backups.")),(0,r.kt)("h2",{id:"environment-configuration"},"Environment Configuration"),(0,r.kt)("p",null,"Change the database connection information in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file to match the credentials you created in the previous step."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DB_HOST=\nDB_PORT=\nDB_DATABASE=\nDB_USERNAME=\nDB_PASSWORD=\n")),(0,r.kt)("h2",{id:"database-setup"},"Database Setup"),(0,r.kt)("p",null,"Now we need to setup all of the base data for the Panel in the database you created earlier. ",(0,r.kt)("strong",{parentName:"p"},"The command below may take some time to run depending on your machine. Please DO NOT exit the process until it is completed!")," This command will setup the database tables that power Paymenter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php artisan migrate\n")),(0,r.kt)("h2",{id:"add-the-first-user"},"Add The First User"),(0,r.kt)("p",null,"You'll then need to create an administrative user so that you can log into the admin side. To do so, run the command below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"php artisan p:user:create\n")))}c.isMDXComponent=!0}}]);