Dim DestArc, AppPath, Files, Pass, Compress
Set WshShell = CreateObject("WScript.Shell")
DestArc  = WshShell.SpecialFolders("Desktop") & "\Book_RRR.7z"
AppPath  = """c:\Program Files\7-Zip\7z.exe"""
Files    = " A.zip Book.zip Cтатьи.zip Гранты.zip Oтчетность_НИРС.zip"
Pass 	 = " -pCQV8-8QZ4-5TJ!"
Compress = " -mx1"
WshShell.Run (AppPath & " a -t7z " & DestArc & " -r" & Files & Pass & Compress)