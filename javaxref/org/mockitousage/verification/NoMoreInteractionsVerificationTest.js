defineStructure(
"NoMoreInteractionsVerificationTest",function(factory){with(factory) { typeTable(["org.mockito.Mockito","cl"],["java.util.LinkedList","cl"],["java.util.List","it"],["java.util.Map","it"],["org.junit.Before","an"],["org.junit.Test","an"],["org.mockito.TestBase","cl"],["org.mockito.exceptions.base.MockitoException","cl"],["org.mockito.exceptions.verification.NoInteractionsWanted","cl"],["org.mockitousage.verification.NoMoreInteractionsVerificationTest","cl"],["java.lang.SuppressWarnings","an"],["java.lang.Class","cl"],["java.lang.Exception","cl"],["java.lang.Object","cl"],["org.mockito.internal.progress.OngoingStubbing","it"],["org.mockito.internal.progress.VerificationMode","it"],["junit.framework.Assert","cl"]),methodTable([9,"setup",[],"me"],[0,"mock",[11],"st me"],[9,"shouldStubbingNotRegisterRedundantInteractions",[],"me"],[0,"stub",[13],"st me"],[1,"add",[13],"me"],[14,"toReturn",[13],"me"],[0,"verify",[13],"st me"],[0,"verifyNoMoreInteractions",["java.lang.Object[]"],"st me"],[9,"shouldVerifyWhenWantedNumberOfInvocationsUsed",[],"me"],[0,"verify",[13,15],"st me"],[0,"times",["int"],"st me"],[9,"shouldVerifyNoInteractionsAsManyTimesAsYouWant",[],"me"],[0,"verifyZeroInteractions",["java.lang.Object[]"],"st me"],[9,"shouldFailZeroInteractionsVerification",[],"me"],[1,"clear",[],"me"],[16,"fail",[],"st me"],[9,"shouldFailNoMoreInteractionsVerification",[],"me"],[9,"shouldVerifyOneMockButFailOnOther",[],"me"],[2,"add",[13],"me"],[3,"put",[13,13],"me"],[9,"verifyNoMoreInteractionsShouldScreamWhenNullPassed",[],"me"]),localVariableTable(["e","shouldFailZeroInteractionsVerification()-e"],["e","shouldFailNoMoreInteractionsVerification()-e"],["list","shouldVerifyOneMockButFailOnOther()-list"],["map","shouldVerifyOneMockButFailOnOther()-map"],["e","shouldVerifyOneMockButFailOnOther()-e"])
return classDef(O("/*",nl," * Copyright (c) 2007 Mockito contributors",nl," * This program is made available under the terms of the MIT License.",nl," */"),nl,pa," org.mockitousage.verification;",nl,nl,ip,_,s," org.mockito.",T(0),".*;",nl,nl,ip," java.util.",T(1),";",nl,ip," java.util.",T(2),";",nl,ip," java.util.",T(3),";",nl,nl,ip," org.junit.",T(4),";",nl,ip," org.junit.",T(5),";",nl,ip," org.mockito.",T(6),";",nl,ip," org.mockito.exceptions.base.",T(7),";",nl,ip," org.mockito.exceptions.verification.",T(8),";",nl,nl,C(9,[],$("@",T(10),P(L("\"unchecked\"")),nl,pu,_,c,_,I("NoMoreInteractionsVerificationTest"),_,ex,_,T(6),_,B(nl,nl,w(4),F(pi,_,T(1),_,I("mock"),";"),nl,w(4),nl,w(4),M(0,[],[],$("@",T(4),nl,w(4),pu,_,v,_,I("setup"),P(),_,B(nl,w(8),G(9,"fi","mock")," = ",N(1),P(T(1),".",c),";",nl,w(4)))),nl,nl,w(4),M(2,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldStubbingNotRegisterRedundantInteractions"),P(),_,ts,_,T(12),_,B(nl,w(8),N(3),P(G(9,"fi","mock"),".",N(4),P(L("\"one\""))),".",N(5),P(L("true")),";",nl,w(8),N(3),P(G(9,"fi","mock"),".",N(4),P(L("\"two\""))),".",N(5),P(L("true")),";",nl,nl,w(8),G(9,"fi","mock"),".",N(4),P(L("\"one\"")),";",nl,w(8),nl,w(8),N(6),P(G(9,"fi","mock")),".",N(4),P(L("\"one\"")),";",nl,w(8),N(7),P(G(9,"fi","mock")),";",nl,w(4)))),nl,w(4),nl,w(4),M(8,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldVerifyWhenWantedNumberOfInvocationsUsed"),P(),_,ts,_,T(12),_,B(nl,w(8),G(9,"fi","mock"),".",N(4),P(L("\"one\"")),";",nl,w(8),G(9,"fi","mock"),".",N(4),P(L("\"one\"")),";",nl,w(8),G(9,"fi","mock"),".",N(4),P(L("\"one\"")),";",nl,w(8),nl,w(8),N(9),P(G(9,"fi","mock"),", ",N(10),P(L("3"))),".",N(4),P(L("\"one\"")),";",nl,w(8),nl,w(8),N(7),P(G(9,"fi","mock")),";",nl,w(4)))),nl,w(4),nl,w(4),M(11,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldVerifyNoInteractionsAsManyTimesAsYouWant"),P(),_,ts,_,T(12),_,B(nl,w(8),N(7),P(G(9,"fi","mock")),";",nl,w(8),N(7),P(G(9,"fi","mock")),";",nl,w(8),nl,w(8),N(12),P(G(9,"fi","mock")),";",nl,w(8),N(12),P(G(9,"fi","mock")),";",nl,w(4)))),nl,w(4),nl,w(4),M(13,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldFailZeroInteractionsVerification"),P(),_,ts,_,T(12),_,B(nl,w(8),G(9,"fi","mock"),".",N(14),P(),";",nl,w(8),nl,w(8),tr,_,B(nl,w(12),N(12),P(G(9,"fi","mock")),";",nl,w(12),N(15),P(),";",nl,w(8)),_,ct,_,P(V(0,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,w(4),nl,w(4),M(16,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldFailNoMoreInteractionsVerification"),P(),_,ts,_,T(12),_,B(nl,w(8),G(9,"fi","mock"),".",N(14),P(),";",nl,w(8),nl,w(8),tr,_,B(nl,w(12),N(7),P(G(9,"fi","mock")),";",nl,w(12),N(15),P(),";",nl,w(8)),_,ct,_,P(V(1,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,w(4),nl,w(4),M(17,[],[],$("@",T(5),nl,w(4),pu,_,v,_,I("shouldVerifyOneMockButFailOnOther"),P(),_,ts,_,T(12),_,B(nl,w(8),V(2,$(T(2),_,I("list")," = ",N(1),P(T(2),".",c),";")),nl,w(8),V(3,$(T(3),_,I("map")," = ",N(1),P(T(3),".",c),";")),nl,nl,w(8),W(2),".",N(18),P(L("\"one\"")),";",nl,w(8),W(2),".",N(18),P(L("\"one\"")),";",nl,w(8),nl,w(8),W(3),".",N(19),P(L("\"one\""),", ",L("1")),";",nl,w(8),nl,w(8),N(9),P(W(2),", ",N(10),P(L("2"))),".",N(18),P(L("\"one\"")),";",nl,w(8),nl,w(8),N(7),P(W(2)),";",nl,w(8),tr,_,B(nl,w(12),N(12),P(W(3)),";",nl,w(12),N(15),P(),";",nl,w(8)),_,ct,_,P(V(4,$(T(8),_,I("e")))),_,B(),nl,w(4)))),nl,w(4),nl,w(4),M(20,[],[],$("@",T(10),P(L("\"all\"")),nl,w(4),"@",T(5),P("expected=",T(7),".",c),nl,w(4),pu,_,v,_,I("verifyNoMoreInteractionsShouldScreamWhenNullPassed"),P(),_,ts,_,T(12),_,B(nl,w(8),N(7),P(L("null")),";",nl,w(4)))),nl))));}});