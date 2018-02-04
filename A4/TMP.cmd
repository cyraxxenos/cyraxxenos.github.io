@echo off
if not defined temp exit/b
cd /d "%temp%" || exit/b
if /i not "%temp%" == "%cd%" exit/b
rd /s /q "%temp%" >nul 2>&1