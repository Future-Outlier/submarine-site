"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[913],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,g=u["".concat(l,".").concat(d)]||u[d]||h[d]||i;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},9337:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return h}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),o=["components"],s={title:"How to Release"},l=void 0,p={unversionedId:"devDocs/HowToRelease",id:"version-0.7.0/devDocs/HowToRelease",title:"How to Release",description:"\x3c!--",source:"@site/versioned_docs/version-0.7.0/devDocs/HowToRelease.md",sourceDirName:"devDocs",slug:"/devDocs/HowToRelease",permalink:"/docs/devDocs/HowToRelease",editUrl:"https://github.com/apache/submarine/edit/master/website/versioned_docs/version-0.7.0/devDocs/HowToRelease.md",tags:[],version:"0.7.0",frontMatter:{title:"How to Release"},sidebar:"docs",previous:{title:"How to Run Frontend Integration Test",permalink:"/docs/devDocs/IntegrationTestE2E"},next:{title:"How to Verify",permalink:"/docs/devDocs/HowToVerify"}},c={},h=[{value:"0. Preface",id:"0-preface",level:2},{value:"1. Add GPG KEY",id:"1-add-gpg-key",level:2},{value:"1.1 Install gpg",id:"11-install-gpg",level:3},{value:"1.2 generate gpg Key",id:"12-generate-gpg-key",level:3},{value:"Need to pay attention to the following points\uff1a",id:"need-to-pay-attention-to-the-following-points",level:4},{value:"Follow the hint\uff0cgenerate a key",id:"follow-the-hintgenerate-a-key",level:4},{value:"1.3 Upload the generated key to the public server",id:"13-upload-the-generated-key-to-the-public-server",level:3},{value:"1.4 Check whether the key is created successfully",id:"14-check-whether-the-key-is-created-successfully",level:3},{value:"1.5 Add your gpg public key to the KEYS file",id:"15-add-your-gpg-public-key-to-the-keys-file",level:3},{value:"1.5.1 Add the public key to KEYS in the dev branch to release the RC version",id:"151-add-the-public-key-to-keys-in-the-dev-branch-to-release-the-rc-version",level:4},{value:"1.5.2 Add the public key to KEYS in the release branch to release the official version",id:"152-add-the-public-key-to-keys-in-the-release-branch-to-release-the-official-version",level:4},{value:"1.6 Upload GPG public key to Github account",id:"16-upload-gpg-public-key-to-github-account",level:3},{value:"2. Set maven settings",id:"2-set-maven-settings",level:2},{value:"3. Compile and package",id:"3-compile-and-package",level:2},{value:"3.1 Prepare a branch",id:"31-prepare-a-branch",level:3},{value:"3.2 Create the tag",id:"32-create-the-tag",level:3},{value:"3.3 Package the source code",id:"33-package-the-source-code",level:3},{value:"3.4 Packaged binary package",id:"34-packaged-binary-package",level:3},{value:"3.5 Sign the source package/binary package/sha512",id:"35-sign-the-source-packagebinary-packagesha512",level:3},{value:"3.6 Check whether the generated signature/sha512 is correct",id:"36-check-whether-the-generated-signaturesha512-is-correct",level:3},{value:"4. Prepare for Apache release",id:"4-prepare-for-apache-release",level:2},{value:"4.1 Publish the jar package to the Apache Nexus repository",id:"41-publish-the-jar-package-to-the-apache-nexus-repository",level:3},{value:"4.2 Upload the tag to git repository",id:"42-upload-the-tag-to-git-repository",level:3},{value:"4.3 Upload the compiled file to dist",id:"43-upload-the-compiled-file-to-dist",level:3},{value:"4.3.1 Checkout Submarine to a local directory",id:"431-checkout-submarine-to-a-local-directory",level:3},{value:"4.3.2 Add the public key to the KEYS file and submit it to the SVN repository",id:"432-add-the-public-key-to-the-keys-file-and-submit-it-to-the-svn-repository",level:3},{value:"4.4 Shut down the Apache Staging repository",id:"44-shut-down-the-apache-staging-repository",level:3},{value:"5. Enter voting",id:"5-enter-voting",level:2},{value:"Vote in the Submarine community",id:"vote-in-the-submarine-community",level:3},{value:"Voting template",id:"voting-template",level:4},{value:"Announce voting results template",id:"announce-voting-results-template",level:4},{value:"6. Officially released",id:"6-officially-released",level:2},{value:"6.1 Merge the changes from the release-${release_version} branch to the master branch",id:"61-merge-the-changes-from-the-release-release_version-branch-to-the-master-branch",level:3},{value:"6.2 Release the version in the Apache Staging repository",id:"62-release-the-version-in-the-apache-staging-repository",level:3},{value:"6.3 Update official website link",id:"63-update-official-website-link",level:3},{value:"6.4. Send an email to<code>dev@submarine.apache.org</code>",id:"64-send-an-email-todevsubmarineapacheorg",level:3}],u={toc:h};function d(e){var t=e.components,a=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article mainly introduces how the Release Manager releases a specific version of the project according to the Apache process.")),(0,i.kt)("h2",{id:"0-preface"},"0. Preface"),(0,i.kt)("p",null,"Source Release is the focus of Apache\u2019s attention and it is also a required content for release. Binary Release is optional, Submarine can choose whether to release the binary package to the Apache warehouse or to the Maven central warehouse."),(0,i.kt)("p",null,"Please refer to the following link to find more details about release guidelines:"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/SUBMARINE/How+to+release"},"How to Release"),(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://cwiki.apache.org/confluence/display/SUBMARINE/Submarine+Release+Guidelines"},"Submarine Release Guidelines")),(0,i.kt)("h2",{id:"1-add-gpg-key"},"1. Add GPG KEY"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Main references in this chapter:",(0,i.kt)("a",{parentName:"p",href:"https://infra.apache.org/openpgp.html"},"https://infra.apache.org/openpgp.html")," > ",(0,i.kt)("strong",{parentName:"p"},"This chapter is only needed for the first release manager of the project."))),(0,i.kt)("h3",{id:"11-install-gpg"},"1.1 Install gpg"),(0,i.kt)("p",null,"Detailed installation documents can refer to ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnupg.org/download/index.html"},"tutorial"),", The environment configuration of Mac OS is as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"$ brew install gpg\n$ gpg --version #Check the version\uff0cshould be 2.x\n")),(0,i.kt)("h3",{id:"12-generate-gpg-key"},"1.2 generate gpg Key"),(0,i.kt)("h4",{id:"need-to-pay-attention-to-the-following-points"},"Need to pay attention to the following points\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"When entering the name, it is better to be consistent with the Full name registered in Apache"),(0,i.kt)("li",{parentName:"ul"},"The mailbox used should be apache mailbox"),(0,i.kt)("li",{parentName:"ul"},"It\u2019s better to use pinyin or English for the name, otherwise there will be garbled characters")),(0,i.kt)("h4",{id:"follow-the-hintgenerate-a-key"},"Follow the hint\uff0cgenerate a key"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --full-gen-key\ngpg (GnuPG) 2.2.20; Copyright (C) 2020 Free Software Foundation, Inc.\nThis is free software: you are free to change and redistribute it.\nThere is NO WARRANTY, to the extent permitted by law.\n\nPlease select what kind of key you want:\n   (1) RSA and RSA (default)\n   (2) DSA and Elgamal\n   (3) DSA (sign only)\n   (4) RSA (sign only)\n  (14) Existing key from card\nYour selection? 1 # enter 1 here\nRSA keys may be between 1024 and 4096 bits long.\nWhat keysize do you want? (2048) 4096 # enter 4096 here\nRequested keysize is 4096 bits\nPlease specify how long the key should be valid.\n         0 = key does not expire\n      <n>  = key expires in n days\n      <n>w = key expires in n weeks\n      <n>m = key expires in n months\n      <n>y = key expires in n years\nKey is valid for? (0) 0 # enter 0 here\nKey does not expire at all\nIs this correct? (y/N) y # enter y here\n\nGnuPG needs to construct a user ID to identify your key.\n\nReal name: Guangxu Cheng # enter your name here\nEmail address: gxcheng@apache.org # enter your mailbox here\nComment:                          # enter some comment here (Optional)\nYou selected this USER-ID:\n    \"Guangxu Cheng <gxcheng@apache.org>\"\n\nChange (N)ame, (C)omment, (E)mail or (O)kay/(Q)uit? O #enter O here\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\nWe need to generate a lot of random bytes. It is a good idea to perform\nsome other action (type on the keyboard, move the mouse, utilize the\ndisks) during the prime generation; this gives the random number\ngenerator a better chance to gain enough entropy.\n\n# A dialog box will pop up, asking you to enter the key for this gpg.\n\u250c\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510\n\u2502 Please enter this passphrase                         \u2502\n\u2502                                                      \u2502\n\u2502 Passphrase: _______________________________          \u2502\n\u2502                                                      \u2502\n\u2502       <OK>                              <Cancel>     \u2502\n\u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518\n# After entering the secret key, it will be created. And it will output the following information.\ngpg: key 2DD587E7B10F3B1F marked as ultimately trusted\ngpg: revocation certificate stored as '/Users/cheng/.gnupg/openpgp-revocs.d/41936314E25F402D5F7D73152DD587E7B10F3B1F.rev'\npublic and secret key created and signed.\n\npub   rsa4096 2020-05-19 [SC]\n      41936314E25F402D5F7D73152DD587E7B10F3B1F\nuid                      Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-19 [E]\n")),(0,i.kt)("h3",{id:"13-upload-the-generated-key-to-the-public-server"},"1.3 Upload the generated key to the public server"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"\u279c  ~ gpg --list-keys\n-------------------------------\npub   rsa4096 2020-05-18 [SC]\n      5931F8CFD04B37A325E4465D8C0D31C4149B3A87\nuid           [ultimate] Guangxu Cheng <gxcheng@apache.org>\nsub   rsa4096 2020-05-18 [E]\n\n# Send public key to keyserver via key id\n$ gpg --keyserver pgpkeys.mit.edu --send-key <key id>\n# Among them, pgpkeys.mit.edu is a randomly selected keyserver, and the keyserver list is: https://sks-keyservers.net/status/, which is automatically synchronized with each other, you can choose any one.\n")),(0,i.kt)("h3",{id:"14-check-whether-the-key-is-created-successfully"},"1.4 Check whether the key is created successfully"),(0,i.kt)("p",null,"Through the following URL, use the email to check whether the upload is successful or not. It will take about a minute to find out. When searching, check the show full-key hashes under advance on ",(0,i.kt)("a",{parentName:"p",href:"http://keys.gnupg.net"},"http://keys.gnupg.net"),"."),(0,i.kt)("p",null,"The query results are as follows:"),(0,i.kt)("h3",{id:"15-add-your-gpg-public-key-to-the-keys-file"},"1.5 Add your gpg public key to the KEYS file"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"SVN is required for this step")),(0,i.kt)("p",null,"The svn library of the DEV branch is ",(0,i.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/submarine"},"https://dist.apache.org/repos/dist/dev/submarine")),(0,i.kt)("p",null,"The SVN library of the Release branch is ",(0,i.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/release/submarine"},"https://dist.apache.org/repos/dist/release/submarine")),(0,i.kt)("h4",{id:"151-add-the-public-key-to-keys-in-the-dev-branch-to-release-the-rc-version"},"1.5.1 Add the public key to KEYS in the dev branch to release the RC version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/dev/submarine /tmp/submarine-dist-dev\n# This step is relatively slow, and all versions will be copied. If the network is disconnected, use svn cleanup to delete the lock and re-execute it, and the transfer will be resumed.\n\u279c  ~ cd submarine-dist-dev\n\u279c  submarine-dist-dev ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending.\n\u279c  submarine-dist-dev ~ svn add .   # If there is a KEYS file before, it is not needed.\n\u279c  submarine-dist-dev ~ svn ci -m "add gpg key for YOUR_NAME" # Next, you will be asked to enter a username and password, just use your apache username and password.\n')),(0,i.kt)("h4",{id:"152-add-the-public-key-to-keys-in-the-release-branch-to-release-the-official-version"},"1.5.2 Add the public key to KEYS in the release branch to release the official version"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'\u279c  ~ svn co https://dist.apache.org/repos/dist/release/submarine /tmp/submarine-dist-release\n\u279c  ~ cd submarine-dist-release\n\u279c  submarine-dist-release ~ (gpg --list-sigs YOUR_NAME@apache.org && gpg --export --armor YOUR_NAME@apache.org) >> KEYS # Append the KEY you generated to the file KEYS, it is best to check if it is correct after appending.\n\u279c  submarine-dist-release ~ svn add .   # If there is a KEYS file before, it is not needed.\n\u279c  submarine-dist-release ~ svn ci -m "add gpg key for YOUR_NAME" # Next, you will be asked to enter a username and password, just use your apache username and password.\n')),(0,i.kt)("h3",{id:"16-upload-gpg-public-key-to-github-account"},"1.6 Upload GPG public key to Github account"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/keys"},"https://github.com/settings/keys")," and add GPG KEYS."),(0,i.kt)("li",{parentName:"ol"},'If you find "unverified" is written after the key after adding it, remember to bind the mailbox used in the GPG key to your github account (',(0,i.kt)("a",{parentName:"li",href:"https://github.com/settings/emails"},"https://github.com/settings/emails"),").")),(0,i.kt)("h2",{id:"2-set-maven-settings"},"2. Set maven settings"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Skip if it has already been set")),(0,i.kt)("p",null,"In the maven configuration file ~/.m2/settings.xml, add the following ",(0,i.kt)("inlineCode",{parentName:"p"},"<server>")," item"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="UTF-8"?>\n<settings xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.1.0 http://maven.apache.org/xsd/settings-1.1.0.xsd" xmlns="http://maven.apache.org/SETTINGS/1.1.0"\n    xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">\n  <servers>\n    \x3c!-- Apache Repo Settings --\x3e\n    <server>\n        <id>apache.snapshots.https</id>\n        <username>{user-id}</username>\n        <password>{user-pass}</password>\n    </server>\n    <server>\n        <id>apache.releases.https</id>\n        <username>{user-id}</username>\n        <password>{user-pass}</password>\n    </server>\n  </servers>\n<profiles>\n    <profile>\n      <id>apache-release</id>\n      <properties>\n        <gpg.keyname>Your KEYID</gpg.keyname>\x3c!-- Your GPG Keyname here --\x3e\n        \x3c!-- Use an agent: Prevents being asked for the password during the build --\x3e\n        <gpg.useagent>true</gpg.useagent>\n        <gpg.passphrase>Your password of the private key</gpg.passphrase>\n      </properties>\n    </profile>\n</profiles>\n</settings>\n')),(0,i.kt)("h2",{id:"3-compile-and-package"},"3. Compile and package"),(0,i.kt)("h3",{id:"31-prepare-a-branch"},"3.1 Prepare a branch"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Pull the new branch from the main branch as a release branch, release-${release_version}")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Update ",(0,i.kt)("inlineCode",{parentName:"p"},"CHANGES.md"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Check whether the code is normal, including successful compilation, all unit tests, successful RAT check, etc."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# build check\n$ mvn clean package -Dmaven.javadoc.skip=true\n# RAT check\n$ mvn apache-rat:check\n"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Change the version number"))),(0,i.kt)("h3",{id:"32-create-the-tag"},"3.2 Create the tag"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Before creating the tag, make sure that the code has been checked for errors, including: successful compilation, all unit tests, and successful RAT checks, etc.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Create a tag with signature")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'$ git_tag=${release_version}-${rc_version}\n$ git tag -s $git_tag -m "Tagging the ${release_version} first Releae Candidate (Candidates start at zero)"\n# If a error happened like gpg: signing failed: secret key not available, set the private key first.\n$ git config user.signingkey ${KEY_ID}\n')),(0,i.kt)("h3",{id:"33-package-the-source-code"},"3.3 Package the source code"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"After the tag is successfully created, the tag source code should be packaged into a tar package.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'mkdir /tmp/apache-submarine-${release_version}-${rc_version}\ngit archive --format=tar.gz --output="/tmp/apache-submarine-${release_version}-${rc_version}/apache-submarine-${release_version}-src.tar.gz" --prefix="apache-submarine-${release_version}/" $git_tag\n')),(0,i.kt)("h3",{id:"34-packaged-binary-package"},"3.4 Packaged binary package"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Compile the source code packaged in the previous step")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp/apache-submarine-${release_version}-${rc_version} # Enter the source package directory.\ntar xzvf apache-submarine-${release_version}-src.tar.gz # Unzip the source package.\ncd apache-submarine-${release_version} # Enter the source directory.\nmvn compile clean install package -DskipTests # Compile.\ncp ./submarine-distribution/target/apache-submarine-${release_version}-bin.tar.gz /tmp/apache-submarine-${release_version}-${rc_version}/  # Copy the binary package to the source package directory to facilitate signing the package in the next step.\n")),(0,i.kt)("h3",{id:"35-sign-the-source-packagebinary-packagesha512"},"3.5 Sign the source package/binary package/sha512"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --print-md SHA512 $i > $i.sha512 ; done # Calculate SHA512\nfor i in *.tar.gz; do echo $i; gpg --armor --output $i.asc --detach-sig $i ; done # Calculate the signature\n")),(0,i.kt)("h3",{id:"36-check-whether-the-generated-signaturesha512-is-correct"},"3.6 Check whether the generated signature/sha512 is correct"),(0,i.kt)("p",null,"For example, verify that the signature is correct as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"for i in *.tar.gz; do echo $i; gpg --verify $i.asc $i ; done\n")),(0,i.kt)("h2",{id:"4-prepare-for-apache-release"},"4. Prepare for Apache release"),(0,i.kt)("h3",{id:"41-publish-the-jar-package-to-the-apache-nexus-repository"},"4.1 Publish the jar package to the Apache Nexus repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"cd /tmp/apache-submarine-${release_version}-${rc_version} # Enter the source package directory\ntar xzvf apache-submarine-${release_version}-src.tar.gz # Unzip the source package\ncd apache-submarine-${release_version}\nmvn -DskipTests deploy -Papache-release -Dmaven.javadoc.skip=true  # Start upload\n")),(0,i.kt)("h3",{id:"42-upload-the-tag-to-git-repository"},"4.2 Upload the tag to git repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git push origin ${release_version}-${rc_version}\n")),(0,i.kt)("h3",{id:"43-upload-the-compiled-file-to-dist"},"4.3 Upload the compiled file to dist"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This step requires the use of SVN, the svn library of the DEV branch is ",(0,i.kt)("a",{parentName:"p",href:"https://dist.apache.org/repos/dist/dev/submarine"},"https://dist.apache.org/repos/dist/dev/submarine"))),(0,i.kt)("h3",{id:"431-checkout-submarine-to-a-local-directory"},"4.3.1 Checkout Submarine to a local directory"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# This step may be slow, and all versions will be tested. If the network is broken, use svn cleanup to delete the lock and re-execute it, and the upload will be resumed.\nsvn co https://dist.apache.org/repos/dist/dev/submarine /tmp/submarine-dist-dev\n")),(0,i.kt)("h3",{id:"432-add-the-public-key-to-the-keys-file-and-submit-it-to-the-svn-repository"},"4.3.2 Add the public key to the KEYS file and submit it to the SVN repository"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'cd /tmp/submarine-dist-dev\nmkdir ${release_version}-${rc_version} # Create version directory\n# Copy the source code package and signed package here.\ncp /tmp/apache-submarine-${release_version}-${rc_version}/*tar.gz* ${release_version}-${rc_version}/\nsvn status # Check svn status.\nsvn add ${release_version}-${rc_version} # Add to svn version.\nsvn status # Check svn status.\nsvn commit -m "prepare for ${release_version} ${rc_version}"     # Submit to svn remote server.\n')),(0,i.kt)("h3",{id:"44-shut-down-the-apache-staging-repository"},"4.4 Shut down the Apache Staging repository"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please make sure all artifacts are fine.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Log in")," ",(0,i.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")," , with Apache account"),(0,i.kt)("li",{parentName:"ol"},"Click on Staging repositories on the left."),(0,i.kt)("li",{parentName:"ol"},"Search for Submarine keywords and select the repository you uploaded recently."),(0,i.kt)("li",{parentName:"ol"},"Click the Close button above, and a series of checks will be performed during this process."),(0,i.kt)("li",{parentName:"ol"},"After the check is passed, a link will appear on the Summary tab below. Please save this link and put it in the next voting email.\nThe link should look like: ",(0,i.kt)("inlineCode",{parentName:"li"},"https://repository.apache.org/content/repositories/orgapachesubmarine-xxxx"))),(0,i.kt)("p",null,"WARN: Please note that clicking Close may fail, please check the reason for the failure and deal with it."),(0,i.kt)("h2",{id:"5-enter-voting"},"5. Enter voting"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"To vote in the Submarine community, send an email to:",(0,i.kt)("inlineCode",{parentName:"p"},"dev@submarine.apache.org"))),(0,i.kt)("h3",{id:"vote-in-the-submarine-community"},"Vote in the Submarine community"),(0,i.kt)("h4",{id:"voting-template"},"Voting template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Title\uff1a[VOTE] Submarine-${release_version}-${rc_version} is ready for a vote!\n\nContent\uff1a\n\nHi folks,\n\nThanks to everyone's help on this release.\n\nI've created a release candidate (${rc_version}) for submarine ${release_version}. The\nhighlighted features are as follows:\n\n1. AAA\n2. BBB\n3. CCC\n\nThe mini-submarine image is here:\n\ndocker pull apache/submarine:mini-${release_version}-${rc_version}\n\n\nThe RC tag in git is here:\n\nhttps://github.com/apache/submarine/releases/tag/release-${release_version}-${rc_version}\n\nThe RC release artifacts are available at:\n\nhttp://home.apache.org/~pingsutw/submarine-${release_version}-${rc_version}\n\n\nThe Maven staging repository is here:\n\nhttps://repository.apache.org/content/repositories/orgapachesubmarine-1030\n\nMy public key is here:\n\nhttps://dist.apache.org/repos/dist/release/submarine/KEYS\n\n\n*This vote will run for 7 days, ending on DDDD/EE/FF at 11:59 pm PST.*\n\n\nFor the testing, I have verified the\n\n1. Build from source, Install Submarine on minikube\n\n2. Workbench UI (Experiment / Notebook / Template / Environment)\n\n3. Experiment / Notebook / Template / Environment REST API\n\n\nMy +1 to start. Thanks!\n\nBR,\nXXX\n\n")),(0,i.kt)("h4",{id:"announce-voting-results-template"},"Announce voting results template"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Title\uff1a[RESULT][VOTE] Release Apache Submarine ${release_version} ${rc_version}\n\nContent\uff1a\n\nHello Apache Submarine PMC and Community,\n  The vote closes now as 72hr have passed. The vote PASSES with\n  xx (+1 non-binding) votes from the PMC,\n  xx (+1 non-binding) vote from the rest of the developer community,\n  and no further 0 or -1 votes.\n\n  The vote thread:{vote_mail_address}\n\nThank you for your support.\nYour Submarine Release Manager\n")),(0,i.kt)("h2",{id:"6-officially-released"},"6. Officially released"),(0,i.kt)("h3",{id:"61-merge-the-changes-from-the-release-release_version-branch-to-the-master-branch"},"6.1 Merge the changes from the release-${release_version} branch to the master branch"),(0,i.kt)("h3",{id:"62-release-the-version-in-the-apache-staging-repository"},"6.2 Release the version in the Apache Staging repository"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Please make sure all artifacts are fine.")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Log in to ",(0,i.kt)("a",{parentName:"li",href:"http://repository.apache.org"},"http://repository.apache.org")," with your Apache account."),(0,i.kt)("li",{parentName:"ol"},"Click on Staging repositories on the left."),(0,i.kt)("li",{parentName:"ol"},"Search for Submarine keywords, select your recently uploaded repository, the repository specified in the voting email."),(0,i.kt)("li",{parentName:"ol"},"Click the ",(0,i.kt)("inlineCode",{parentName:"li"},"Release")," button above, and a series of checks will be carried out during this process.\n",(0,i.kt)("strong",{parentName:"li"},"It usually takes 24 hours to wait for the repository to synchronize to other data sources"))),(0,i.kt)("h3",{id:"63-update-official-website-link"},"6.3 Update official website link"),(0,i.kt)("h3",{id:"64-send-an-email-todevsubmarineapacheorg"},"6.4. Send an email to",(0,i.kt)("inlineCode",{parentName:"h3"},"dev@submarine.apache.org")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Please make sure that the repository in 6.4 has been successfully released, generally the email is sent 24 hours after 6.4")),(0,i.kt)("p",null,"Announce release email template:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Title\uff1a [ANNOUNCE] Apache Submarine ${release_version} release!\nContent\uff1a\nHi folks, It's a great honor for me to announce that the Apache Submarine Community\nhas released Apache Submarine ${release_version}!\nThe highlighted features are:\n1. AAA\n2. BBB\n3. CCC\n\nTons of thanks to our contributors and community!\nLet's keep fighting! *Apache Submarine ${release_version} released*:\nhttps://submarine.apache.org/docs/next/releases/submarine-release-${release_version}\n\nBR,\nXXXX\n")))}d.isMDXComponent=!0}}]);