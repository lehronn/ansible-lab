# soda-ansible-lab
my own ansible laboratory

## Wylistowanie hostów danej grupy z inventory
ansible nodes --list-hosts

## Użycie modułu za pomocą komendy
ansible nodes -i hosts -m ping

## Puszczenie playbooka komendą z przekazaniem parametrów w zmiennych
ansible-playbook ./roles/common/tasks/user.yml --extra-vars "vaction=add vlogin=test0 vuid=1234"



## Things to do

1. Move role-payload variables to default
2. Move task-payload variables to standard variables
3. Variables for Ubuntu/Debian/RHEL7/RHEL8/Windows?
4. Fix Git
5. common role
6. samba role
7. ftp role
8. apache+php role
9. lamp + phpmyadmin role
10. ngnix role
11. mariadb role
12. Develop readme
13. Develop Getting started
14. Develop Manual
15. python3-libsemanage in ftp and lamp roles should be installed on all remote hosts by common role
16. add variable to up of all templates with warning about manual edition
17. add epel adding to common and remove from others roles




### common role functions

* aktualizacja /etc/hosts
* hostnamectl edit/listing
* playbook do konfiguracji łączności z kontrolerem
* wyświetlenie etc/fstab
* wyświetlenie etc/hosts
* wyświetlanie konfiguracji sieci?
* wyświetlanie df -h / lsblk
* user add/remove/edit
* group add/remove/edit
* chown chmod
* selinux zmiana polityki, dodanie do katalogu
* acl
* spakuj plik > wyślij plik > pobierz plik
* dnf install/remove/update/status/autoremove package nie dnf!
* timezone settings
* pingowanie na inny adres, telnes, nslookup, traceroute
* mkdir rm touch mv
* crontab
* rsyslog
* usługi uruchamianie/wyłączanie/restartowanie/status/listowanie
* jakieś zapytanie RESTowe do aplikajci nodovej? offeringi??
